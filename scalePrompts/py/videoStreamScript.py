import asyncio
import logging
import cv2
from aiohttp import web
from aiortc import RTCPeerConnection, RTCSessionDescription, VideoStreamTrack
from aiortc.contrib.media import MediaBlackhole, MediaPlayer, MediaRecorder
from picamera import PiCamera
from picamera.array import PiRGBArray

logging.basicConfig(level=logging.INFO)

class CameraStreamTrack(VideoStreamTrack):
    def __init__(self, camera):
        super().__init__()
        self.camera = camera
        self.raw_capture = PiRGBArray(camera, size=(640, 480))

    async def recv(self):
        frame = self.camera.capture_continuous(
            self.raw_capture, format='bgr', use_video_port=True
        ).__next__()
        img = frame.array
        self.raw_capture.truncate(0)
        return img

async def index(request):
    content = open("index.html", "r").read()
    return web.Response(content_type="text/html", text=content)

async def offer(request):
    params = await request.json()
    offer = RTCSessionDescription(sdp=params["sdp"], type=params["type"])

    pc = RTCPeerConnection()
    pcs.add(pc)

    @pc.on("iceconnectionstatechange")
    async def on_iceconnectionstatechange():
        if pc.iceConnectionState == "failed":
            await pc.close()
            pcs.discard(pc)

    # Handle the camera stream
    local_video = CameraStreamTrack(camera)
    pc.addTrack(local_video)

    await pc.setRemoteDescription(offer)
    answer = await pc.createAnswer()
    await pc.setLocalDescription(answer)

    return web.json_response(
        {"sdp": pc.localDescription.sdp, "type": pc.localDescription.type}
    )

pcs = set()
camera = PiCamera()
camera.resolution = (640, 480)

app = web.Application()
app.router.add_get("/", index)
app.router.add_post("/offer", offer)

web.run_app(app, host="0.0.0.0", port=8080)

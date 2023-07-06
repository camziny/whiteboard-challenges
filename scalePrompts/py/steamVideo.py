import webrtcvad
import cv2
import numpy as np
import socket

# Create a WebRTC audio VAD object
vad = webrtcvad.Vad()

# Create a socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.bind(("", 8080))
sock.listen(1)

# Accept a connection
conn, addr = sock.accept()

# Start streaming video
cap = cv2.VideoCapture(0)
while True:
    # Capture a frame from the camera
    ret, frame = cap.read()

    # Check if the frame contains any audio
    audio = np.fromstring(frame, np.uint8)
    is_speech = vad.is_speech(audio, 16000)

    # Send the frame to the client
    conn.sendall(frame)

    # If there is speech, send a message to the client
    if is_speech:
        conn.sendall(b"speech")

# Close the connection
conn.close()

// Import the necessary libraries
const video = document.querySelector("video");
const recorder = new MediaRecorder(video);

// Get the start and end times of the video to be trimmed
const start = 1000;
const end = 3000;

// Start recording the video
recorder.start();

// Wait for the recording to finish
recorder.addEventListener("stop", () => {
  // Get the recorded video blob
  const blob = recorder.getBlob();

  // Create a new video element from the blob
  const trimmedVideo = document.createElement("video");
  trimmedVideo.src = URL.createObjectURL(blob);

  // Trim the video to the specified start and end times
  trimmedVideo.currentTime = start;
  trimmedVideo.duration = end - start;

  // Append the trimmed video to the DOM
  document.body.appendChild(trimmedVideo);
});

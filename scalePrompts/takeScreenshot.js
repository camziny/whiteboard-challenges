// Import the html2canvas library
import html2canvas from "html2canvas";

// Create a function to take a screenshot
function takeScreenshot() {
  // Get the current HTML of the page
  const html = document.documentElement.innerHTML;

  // Create a canvas element
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Render the HTML to the canvas
  html2canvas(document.body, {
    canvas: canvas,
  });

  // Get the data URL of the canvas
  const dataURL = canvas.toDataURL("image/png");

  // Save the screenshot to the local file system
  const fileName = `screenshot-${new Date().getTime()}.png`;
  const blob = new Blob([dataURL], { type: "image/png" });
  saveAs(blob, fileName);
}

// Add a button to the page to take a screenshot
const button = document.createElement("button");
button.textContent = "Take Screenshot";
button.addEventListener("click", takeScreenshot);

// Append the button to the page
document.body.appendChild(button);

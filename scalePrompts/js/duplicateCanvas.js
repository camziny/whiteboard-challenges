import React, { useState } from "react";

const Canvas = ({ image }) => (
  <canvas
    id="canvas"
    width="400"
    height="300"
    style={{ background: `url(${image})`, backgroundSize: "cover" }}
  ></canvas>
);

const App = () => {
  const [image, setImage] = useState("initial_picture.jpg");

  const handleButtonClick = () => {
    setImage("another_picture.jpg");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Flip the image horizontally
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    // Redraw the image
    const img = new Image();
    img.src = "another_picture.jpg";
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

  const handleOpenNewTab = () => {
    const canvas = document.getElementById("canvas");
    const dataURL = canvas.toDataURL();

    const newTab = window.open();
    newTab.document.write("<html><body>");
    newTab.document.write(`<img src="${dataURL}" width="400" height="300" />`);
    newTab.document.write("</body></html>");
  };

  return (
    <div>
      <h1>Canvas Example</h1>
      <Canvas image={image} />
      <button onClick={handleButtonClick}>Button A</button>
      <button onClick={handleOpenNewTab}>Button B</button>
    </div>
  );
};

export default App;

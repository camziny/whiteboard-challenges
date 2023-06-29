import React from "react";
import { useDrop } from "react-dnd";

const ImageUploader = ({ onImageUpload }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "image/*",
    drop: (item, monitor) => {
      if (monitor) {
        onImageUpload(monitor.getItem().files[0]);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  const dropZoneStyle = {
    width: "100%",
    height: "100%",
    border: isActive ? "2px dashed #000" : "2px dashed #888",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <div ref={drop} style={dropZoneStyle}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => onImageUpload(e.target.files[0])}
      />
      <p>Drag and drop an image here or click to browse</p>
    </div>
  );
};

const ImageViewer = ({ imageUrl }) => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return <img src="{imageUrl}" alt="Uploaded" />;
};

const ImageComponent = () => {
  const [uploadedImage, setUploadedImage] = React.useState(null);

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const containerStyle = {
    width: "500px",
    height: "300px",
    border: "1px solid #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      {uploadedImage ? (
        <ImageViewer imageUrl={uploadedImage} />
      ) : (
        <ImageUploader onImageUpload={handleImageUpload} />
      )}
    </div>
  );
};

export default ImageComponent;

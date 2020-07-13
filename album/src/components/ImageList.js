import React from "react";
import ImageCard from "./ImageCard";
import "../styles/ImageList.css";
const ImageList = (props) => {
  // console.log(props.images);
  const photos = props.images.map((img) => {
    return <ImageCard key={img.id} img={img} />;
  });
  return <div className="image-list">{photos}</div>;
};

export default ImageList;

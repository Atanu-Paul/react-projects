import React from "react";
import "../styles/Banner.css";
const Banner = (props) => {
  return (
    <div
      className="bannerSection"
      style={{ display: props.shouldHide }}
    ></div>
  );
};

export default Banner;

import React from "react";
import AnimatedImage from "./AnimatedImage";
import myImage from "../assets/pic2.avif";

const ThirdSlide = () => {
  return (
    <div className="bg-[#FCFB71]">
        <div className="p-10 ">
      <AnimatedImage src={myImage} alt="Cool Animation" />
    </div>
    </div>
  );
};

export default ThirdSlide;

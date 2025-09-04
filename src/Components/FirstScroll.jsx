import React from "react";
import myImage from "../assets/first~mv2.avif";

const FirstScroll = () => {
  return (
    <div className="bg-[#FCFB71]">
      <div className="relative w-full p-10 overflow-hidden rounded-b-4xl">
        {/* Image */}
        <img
          src={myImage}
          alt="Get Involved"
          className="w-full h-96 object-cover rounded-4xl"
        />

        {/* Overlay */}
        <div className="absolute inset-0 rounded-b-4xl flex items-center justify-center">
          <h1 className="text-[#FCFB71] text-9xl font-bold">Get Involved</h1>
        </div>
      </div>
    </div>
  );
};

export default FirstScroll;

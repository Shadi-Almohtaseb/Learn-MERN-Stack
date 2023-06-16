import { Carousel } from "antd";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px]">
      <Carousel
        autoplay
        autoplaySpeed={2000}
        draggable
        fade
        className="h-[700px] mt-3"
      >
        <div className="bg-pink-500 h-[700px] rounded-xl"></div>
        <div className="bg-gray-900 h-[700px] rounded-xl"></div>
        <div className="bg-red-700  h-[700px] rounded-xl"></div>
        <div className="bg-gray-800 h-[700px] rounded-xl"></div>
        <div className="bg-orange-500 h-[700px] rounded-xl"></div>
        <div className="bg-gray-900 h-[700px] rounded-xl"></div>
        <div className="bg-green-700 h-[700px] rounded-xl"></div>
        <div className="bg-blue-800 h-[700px] rounded-xl"></div>
      </Carousel>
    </div>
  );
};

export default Hero;

import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from "../assets/images/Banners/fashion-sale.webp";
import sliderImage2 from "../assets/images/Banners/fashionsale.jpg";
import sliderImage3 from "../assets/images/Banners/gadget-sale.jpg";
import sliderImage4 from "../assets/images/Banners/kitchen-sale.jpg";
import sliderImage5 from "../assets/images/Banners/oppo-reno7.webp";
import sliderImage6 from "../assets/images/Banners/poco-m4-pro.webp";
import sliderImage7 from "../assets/images/Banners/realme-9-pro.webp";
import sliderImage8 from "../assets/images/Banners/vivo.webp";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const banners = [
    sliderImage1,
    sliderImage2,
    sliderImage3,
    sliderImage4,
    sliderImage5,
    sliderImage6,
    sliderImage7,
    sliderImage8,
  ];

  return (
    <div>
      <section className="h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden my-5">
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img
              draggable="true"
              className="h-44 sm:h-72 w-full object-cover"
              src={el}
              alt="banner"
              key={i}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Hero;

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowLeft />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowRight />
    </div>
  );
};

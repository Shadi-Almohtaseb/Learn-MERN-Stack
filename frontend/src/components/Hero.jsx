import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sliderImage1 from "../assets/images/Banners/fashion-sale.webp";
import sliderImage2 from "../assets/images/Banners/fashionsale.jpg";
import sliderImage3 from "../assets/images/Banners/gadget-sale.jpg";
import sliderImage4 from "../assets/images/Banners/kitchen-sale.jpg";
import sliderImage5 from "../assets/images/Banners/oppo-reno7.webp";
import sliderImage6 from "../assets/images/Banners/poco-m4-pro.webp";
import sliderImage7 from "../assets/images/Banners/realme-9-pro.webp";
import sliderImage8 from "../assets/images/Banners/vivo.webp";

import mobiles from "../assets/images/Categories/phone.png";
import fashion from "../assets/images/Categories/fashion.png";
import electronics from "../assets/images/Categories/electronics.png";
import home from "../assets/images/Categories/home.png";
import travel from "../assets/images/Categories/travel.png";
import appliances from "../assets/images/Categories/appliances.png";
import furniture from "../assets/images/Categories/furniture.png";
import beauty from "../assets/images/Categories/beauty.png";
import grocery from "../assets/images/Categories/grocery.png";
import SearchBar from "./SearchBar";

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const catNav = [
    {
      name: "Mobiles",
      icon: mobiles,
    },
    {
      name: "Fashion",
      icon: fashion,
    },
    {
      name: "Electronics",
      icon: electronics,
    },
    {
      name: "Home",
      icon: home,
    },
    {
      name: "Travel",
      icon: travel,
    },
    {
      name: "Appliances",
      icon: appliances,
    },
    {
      name: "Furniture",
      icon: furniture,
    },
    {
      name: "Beauty,Toys & more",
      icon: beauty,
    },
    {
      name: "Grocery",
      icon: grocery,
    },
  ];

  return (
    <div>
      <div className="md:hidden flex items-center justify-center mt-3 px-1">
        <SearchBar />
      </div>
      <div className="my-6">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
          }}
        >
          {banners.map((el, i) => (
            <SwiperSlide>
              <img
                draggable="true"
                className="h-44 sm:h-72 w-full object-cover"
                src={el}
                alt="banner"
                key={i}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-white py-3 rounded-xl my-3" id="categories">
        <span className="font-semibold text-2xl ml-10">Categories</span>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={6}
          slidesPerView={width >= 1000 ? 5 : 3}
          navigation
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
          }}
        >
          <div className="flex items-center justify-center">
            {catNav.map((el, i) => (
              <SwiperSlide>
                <div className="flex items-center justify-center flex-col my-5">
                  <img draggable="true" src={el.icon} alt="banner" key={i} />
                  <span>{el.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;

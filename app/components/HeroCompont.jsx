"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import img1 from "../../public/Image/Cricket-wepon/img2.png";
import img2 from "../../public/Image/Cricket-wepon/03.jpg";
import img3 from "../../public/Image/Cricket-wepon/01.jpg";
import img4 from "../../public/Image/Cricket-wepon/04.jpg";

const slides = [
  {
    image: img1,
    quote: "Unleash Your Passion for Cricket and Embrace the Thrill of the Game",
    saleText: "Get in the game with up to 50% off on a wide range of cricket gear's",
    productText: "Shop Now",
  },
  {
    image: img2,
    quote: "Experience the Unparalleled Excitement and Achieve Victory\nwith Our Premium Cricket Equipment",
    saleText: "Limited Time Offer: Don't miss out on the opportunity to upgrade your game",
    productText: "Buy Now",
  },
  {
    image: img3,
    quote: "Gear up with the Latest Innovations and Dominate the Field like Never Before",
    saleText: "Discover New Arrivals and stay ahead of the competition",
    productText: "Explore",
  },
  {
    image: img4,
    quote: "Elevate Your Performance and Unleash Your True Cricketing Potential with Our Cutting-Edge Gear",
    saleText: "New Arrivals: Enhance your skills and excel on the field",
    productText: "Upgrade Now",
  },
];

const HeroComponent = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 10000, // 5 seconds
          disableOnInteraction: false,
        }}
        className="mySwiper h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="min-h-full relative">
            <Image 
              src={slide.image}
              alt={slide.quote}
              className="w-full h-full object-cover"
              fill
              priority
            />
            <div className="absolute bg-black/40 inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-40 text-white">
              <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium sm:font-semibold mb-2 sm:mb-3 md:mb-4">
                  {slide.saleText}
                </p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold whitespace-pre-line mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight">
                  {slide.quote}
                </h2>
                <button className="border border-white text-white font-medium sm:font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-3.5 lg:py-4 rounded hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                  {slide.productText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroComponent;
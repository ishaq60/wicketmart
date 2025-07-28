"use client";
import "swiper/css/pagination"; // ⬅️ Required for dots 
import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/autoplay"; 
import Image from "next/image"; 
import oneimage from "../../../public/Image/Cricket-wepon/03.jpg"; 

const FeaturedProducts = () => { 
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return ( 
    <div className="mt-12 sm:mt-16 md:mt-20 px-2 sm:px-4"> 
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold"> 
        Featured Products 
      </h1> 
      <Swiper 
        spaceBetween={5} 
        slidesPerView={2} 
        centeredSlides={true} 
        autoplay={{ delay: 2000, disableOnInteraction: false }} 
        pagination={{ clickable: true }} // 👈 enable clickable dots 
        loop={true} 
        modules={[Autoplay, Pagination]} // 👈 include Pagination module 
        className="mt-4 sm:mt-6 md:mt-8" 
        breakpoints={{ 
          640: { 
            slidesPerView: 1, 
            spaceBetween: 20, 
          }, 
          1024: { 
            slidesPerView: 3, 
            spaceBetween: 30, 
          }, 
        }} 
      > 
        {/* SwiperSlide content */}
        {products.map((product, index) => ( 
          <SwiperSlide key={index}> 
            <div className="slide-card group w-full max-w-[500px] sm:max-w-[350px] md:max-w-[600px] h-auto sm:h-[350px] md:h-[500px] mb-8 sm:mb-10 md:mb-12 mx-auto transition-all duration-300 ease-in-out bg-gray-200 p-4 sm:p-6 md:p-8 rounded-xl text-center opacity-60 "> 
              <div className="card "> 
                <div className="card-body items-center text-center p-3 sm:p-4 md:p-6"> 
                  <h2 className="card-title text-xl font-semibold sm:text-lg md:text-xl group-hover:text-red-500"> 
                    SG klr Xtreme English Willow Short Handle Cricket bat 
                  </h2>
                  <Image src={oneimage} alt="oneimage" />
                  <div className="flex items-baseline space-x-2 "> 
                    <span className="text-3xl font-bold text-black group-hover:text-red-500"> 
                      ৳14,950 
                    </span> 
                    <span className="text-2xl line-through text-black group-hover:text-red-500"> 
                      ৳23,000 
                    </span> 
                  </div> 
                </div> 
              </div> 
            </div>
          </SwiperSlide> 
        ))} 
      </Swiper> 
    </div> 
  ); 
};

export default FeaturedProducts;

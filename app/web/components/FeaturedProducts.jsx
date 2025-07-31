"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import useAllProducts from "@/app/Hooks/useAllProducts";
import Loading from "./loading";

const FeaturedProducts = () => {
  const { products } = useAllProducts();
  console.log(products)

  if (!products || products.length === 0) {
    return (
      <div className="w-full py-16 flex justify-center items-center">
           <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 px-2 sm:px-4">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
        Featured Products
      </h1>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mt-6"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
{products.map((product) => (
  <SwiperSlide key={product?._id}>
    <Link href={`/sProduct/${product?._id}`}>
      <div className="w-full sm:w-[280px] lg:w-[500px] mt-4 h-[400px] bg-white mb-8 rounded-xl shadow-lg hover:shadow-xl mx-auto overflow-hidden transition-all group">
        {/* Image */}
        <h2 className="text-center text-lg font-semibold line-clamp-2 group-hover:text-red-500">
          {product?.name}
        </h2>
        <div className="w-full mt-2 p-2 h-[280px] relative">
          <Image
            src={product?.images[0]}
            alt={product?.name}
            fill
            className="object-cover px-2 h-full"
          />
        </div>

        <div className="p-4 flex flex-col justify-between h-[200px]">
          <div className="flex justify-center items-center mt-2 space-x-2">
            <span className="text-xl font-bold text-black group-hover:text-red-500">
              ৳{product?.price}
            </span>
            <span className="text-sm line-through [text-decoration-color:theme(colors.red.500)] text-gray-700 group-hover:text-red-500">
              ৳{product?.originalPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </SwiperSlide>
))}



      </Swiper>
    </div>
  );
};

export default FeaturedProducts;

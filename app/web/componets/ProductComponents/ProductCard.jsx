"use client";
import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import Pagination from "./Pagination";

const ProductCard = () => {
  const products = [1, 2, 3, 4,5,6,7,8];

  return (
    <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <Link
          key={product}
          href={`/sProduct/${product}`}
          className="w-[350px] bg-white border border-gray-200 space-y-6 rounded-lg h-[550px] shadow-sm block"
        >
          {/* Product Images */}
          <div className="relative bg-gray-50 p-16">
            <div className="flex justify-center items-center space-x-2">
              {/* Three bats */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-32 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm relative"
                >
                  <div className="absolute inset-2 bg-gradient-to-b from-amber-50 to-amber-100 rounded-sm">
                    <div className="w-full h-8 bg-black rounded-sm mb-2 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">SG</span>
                    </div>
                    <div className="w-full flex-1 bg-gradient-to-b from-amber-100 to-yellow-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              GM Chrome 707...
            </h3>

            <div className="flex items-center mb-2">
              <div className="flex space-x-0.5">
                <Star className="w-5 h-4 fill-red-500 text-red-500" />
                <Star className="w-5 h-4 fill-red-500 text-red-500" />
                <Star className="w-5 h-3 fill-gray-300 text-gray-300" />
                <Star className="w-5 h-3 fill-gray-300 text-gray-300" />
                <Star className="w-5 h-3 fill-gray-300 text-gray-300" />
              </div>
              <span className="text-xs text-gray-500 ml-1">(1)</span>
            </div>

            <p className="text-xs text-gray-600 mb-3">
              Handle: short handle Weight 1170-1230 Bat...
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-gray-500 line-through">₹18,000</span>
              <span className="text-lg font-bold text-gray-900">₹11,700</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-6 px-4 text-md font-semibold hover:bg-red-600 transition-colors duration-200">
              ADD TO CART
            </button>
          </div>
        </Link>
      ))}
    
  
    </div>
       <div>
         <Pagination></Pagination>
       </div>
    </div>
  );
};

export default ProductCard;

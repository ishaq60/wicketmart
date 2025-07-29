"use client"
import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function() {
    const product=[1,2,3,4,5,6,7,8]
  return (
  <div className='container mx-auto'>
    <h1 className='text-4xl mt-20 font-bold text-center'>Trending Products</h1>
  <div className='grid sm:grid-cols-2 gap-y-4 md:grid-cols-4 lg:grid-cols-4 justify-center items-center mt-20'>
      {
        product.map(product=>(
  <Link href={`/sProduct/:id`}>
              <div key={product} className="w-[350px] bg-white border border-gray-200 rounded-lg h-[470px] shadow-sm ">
      {/* Product Images */}
      <div className="relative bg-gray-50 p-16">
        <div className="flex justify-center items-center space-x-2">
          {/* Three bat images side by side */}
          <div className="w-16 h-32 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm relative">
            <div className="absolute inset-2 bg-gradient-to-b from-amber-50 to-amber-100 rounded-sm">
              <div className="w-full h-8 bg-black rounded-sm mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">SG</span>
              </div>
          
            </div>
          </div>
          
          <div className="w-16 h-32 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm relative">
            <div className="absolute inset-2 bg-gradient-to-b from-amber-50 to-amber-100 rounded-sm">
              <div className="w-full h-8 bg-black rounded-sm mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">SG</span>
              </div>
              <div className="w-full flex-1 bg-gradient-to-b from-amber-100 to-yellow-200"></div>
            </div>
          </div>
          
          <div className="w-16 h-32 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm relative">
            <div className="absolute inset-2 bg-gradient-to-b from-amber-50 to-amber-100 rounded-sm">
              <div className="w-full h-8 bg-black rounded-sm mb-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">SG</span>
              </div>
              <div className="w-full flex-1 bg-gradient-to-b from-amber-100 to-yellow-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Title */}
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          GM Chrome 707...
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex space-x-0.5">
            <Star className="w-3 h-3 fill-red-500 text-red-500" />
            <Star className="w-3 h-3 fill-red-500 text-red-500" />
            <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
            <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
            <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
          </div>
          <span className="text-xs text-gray-500 ml-1">(1)</span>
        </div>

        {/* Product Description */}
        <p className="text-xs text-gray-600 mb-3">
          Handle : short handle Weight 1170-1230 Bat...
        </p>

        {/* Pricing */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-sm text-gray-500 line-through">₹18,000</span>
          <span className="text-lg font-bold text-gray-900">₹11,700</span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-black text-white py-3 px-4 text-md font-semibold hover:bg-red-600 transition-colors duration-200">
          ADD TO CART
        </button>
      </div>
    </div>
  
  </Link>
        ))
    }
  </div>
  </div>
  );
}
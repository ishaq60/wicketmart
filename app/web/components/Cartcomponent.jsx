
"use client";

import Link from "next/link";
import bat from "../../../public/Image/products/bats/zip/0002.jpg";
import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const Cartcomponent = () => {
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState("");

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-4 sm:space-y-0 mt-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <Link
          href={"/products"}
          className="underline hover:text-red-500 text-xl"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Cart and Summary */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Cart Item */}
        <div className="max-w-[750px] max-h-[350px] h-auto mt-12 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-2/6 h-full p-4 flex items-center justify-center bg-gray-50">
            <Image
              src={bat}
              alt="bat"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-4/6 h-full p-6 flex flex-col justify-between">
            {/* Header with title and delete icon */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-medium text-gray-900 leading-tight">
                SG klr Xtreme English Willow Short Handle Cricket bat
              </h2>
              <button className="text-red-500 hover:text-black ml-4">
                <Trash2 size={20} />
              </button>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-sm font-medium">
                  PRICE:
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  ৳14,950
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ৳8,050
                </span>
              </div>
            </div>

            {/* Quantity Section */}
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm font-medium">QTY:</span>
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                >
                  −
                </button>
                <span className="text-lg font-medium w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Section */}
            <div className="mt-auto">
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-sm font-medium">
                  TOTAL:
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  ৳{(14950 * quantity).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full max-w-[650px] mt-12 bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          {/* Header */}
          <h2 className="text-lg font-semibold text-black mb-6">
            Order Summary (1 item)
          </h2>

          {/* Price Details */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Original Price</span>
              <span className="text-black font-medium">৳23,000</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Discount</span>
              <span className="text-black font-medium">৳8,050</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Delivery</span>
              <span className="text-black font-medium">Free</span>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 mb-4" />

          {/* Total Price */}
          <div className="mb-2">
            <div className="flex justify-between items-center">
              <span className="text-black font-semibold text-lg">
                Total Price
              </span>
              <span className="text-black font-semibold text-lg">
                ৳14,950
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              (Inclusive of all taxes)
            </p>
          </div>

          {/* Coupon Code Section */}
          <div className="mt-6 mb-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-red-500 transition-colors font-medium">
                Apply
              </button>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-6 bg-black text-white py-4 px-4 text-md font-semibold hover:bg-red-600 transition-colors duration-200">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartcomponent;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import cartiamge from "../../../public/Image/cart/cart_img.png";

import bat from "../../../public/Image/products/bats/zip/0002.jpg"; // fallback image
import { removeFromCart } from "./store/cartSlice";

const Cartcomponent = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // We keep a local state quantity per item (simplified, ideally from redux)
  // We'll keep quantity state per item id in an object:
  const [quantities, setQuantities] = useState(() => {
    const init = {};
    cartItems.forEach((item) => {
      init[item.id] = item.quantity || 1;
    });
    return init;
  });

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[id] || 1) + change);
      return { ...prev, [id]: newQty };
    });
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-4 sm:space-y-0 mt-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <Link href={"/products"} className="underline  mt-1 hover:text-red-500 text-xl">
          Continue Shopping
        </Link>
      </div>

      {/* Cart and Summary */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
    {
  cartItems.length === 0 && (
    <h1 className="text-red-500 text-center text-2xl m-15">No Item Found in Cart</h1>
  )
}

        {/* Cart Item */}
        <div className="max-w-[750px] gap-y-5  h-auto mt-12 bg-white border border-gray-200 rounded-lg shadow-sm">
          {cartItems.map((cart) => (
            <div key={cart.id} className="flex gap-5 w-full">
              {/* Image Section */}
              <div className="w-full md:w-2/6 h-full p-4 flex items-center justify-center bg-gray-50">
                <Image
                  src={cart.image || bat}
                  alt={cart.name}
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
                    {cart.name}
                  </h2>
                  <button onClick={() => dispatch(removeFromCart(cart?.id))} className="text-red-500 hover:text-black ml-4">
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* Price Section */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 text-sm font-medium">PRICE:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      ৳{cart.price.toLocaleString()}
                    </span>
                    {cart.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ৳{cart.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity Section */}
                <div className="mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600 text-sm font-medium">QTY:</span>
                    <button
                      onClick={() => handleQuantityChange(cart.id, -1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="text-lg font-medium w-8 text-center">
                      {quantities[cart.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(cart.id, 1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Section */}
                <div className="mt-auto">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 text-sm font-medium">TOTAL:</span>
                    <span className="text-xl font-semibold text-gray-900">
                      ৳{((cart.price) * (quantities[cart.id] || 1)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full max-w-[650px] mt-12 bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
          {/* Header */}
          <h2 className="text-lg font-semibold text-black mb-6">
            Order Summary ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})
          </h2>

          {/* Price Details */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Original Price</span>
              <span className="text-black font-medium">
                ৳
                {cartItems
                  .reduce((acc, cur) => acc + (cur.originalPrice || cur.price) * (quantities[cur.id] || 1), 0)
                  .toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Discount</span>
              <span className="text-black font-medium">
                ৳
                {cartItems
                  .reduce(
                    (acc, cur) =>
                      acc +
                      ((cur.originalPrice || cur.price) - cur.price) * (quantities[cur.id] || 1),
                    0
                  )
                  .toLocaleString()}
              </span>
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
              <span className="text-black font-semibold text-lg">Total Price</span>
              <span className="text-black font-semibold text-lg">
                ৳
                {cartItems
                  .reduce((acc, cur) => acc + cur.price * (quantities[cur.id] || 1), 0)
                  .toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">(Inclusive of all taxes)</p>
          </div>

          {/* Coupon Code Section */}
          <div className="mt-6 mb-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
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
          <div className="mt-4 m-2">
            <Image
              src={cartiamge}
              alt="cart image"
              className="w-full mt-2 p-2 h-20 object-cover rounded-lg shadow-md"
              width={300}
              height={256}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcomponent;

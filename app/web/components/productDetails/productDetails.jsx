"use client";

import React, { useState } from "react";
import { Star, StarHalf, Minus, Plus, Truck } from "lucide-react";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const {
    averageRating,
    brand,
    category,
    description,
    discount,
    discountPercentage,
    handleType,
    inStock,
    name,
    offersAndDiscounts,
    originalPrice,
    price,
    ratings,
    reviews,
    taxInclusive,
    totalReviews,
    uname,
    _id,
    images = [],
  } = product || {};

  const mainImage = images[selectedImage];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const StarRating = ({ rating = 0 }) => {
    // Round rating to nearest half star for more accuracy if needed
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <Star key={i} className="w-6 h-6 fill-black text-black" />
            );
          } else if (i === fullStars && halfStar) {
            return (
              <StarHalf key={i} className="w-6 h-6 fill-black text-black" />
            );
          } else {
            return (
              <Star key={i} className="w-6 h-6 text-gray-300" />
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="w-full p-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Images */}
        <div className="flex shadow-md border border-gray-300 gap-4">
          {/* Thumbnail images */}
          <div className="flex flex-col gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-40 px-16 h-30 border-2 rounded-lg overflow-hidden ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt={`Product view ${index + 1}`}
                  width={200}
                  height={204}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 max-w-md">
            <Image
              src={mainImage}
              alt={name}
              width={300}
              height={300}
              className="w-full ml-12 h-auto object-contain"
            />
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-black">{name}</h1>

          {/* Brand and type */}
          <div className="text-gray-800 text-2xl">
            {handleType} Cricket bat, Brand: {brand}
          </div>

          {/* Rating */}
          <div className="flex items-center text-black gap-2">
            <StarRating rating={averageRating} />
            <span className="text-xl">
              | {totalReviews} Review{totalReviews > 1 ? "s" : ""}
            </span>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">{price.toLocaleString()} Tk</span>
              <span className="text-lg text-gray-500 line-through">
                {originalPrice.toLocaleString()} Tk
              </span>
              {inStock && (
                <div className="flex items-center gap-2 bg-green-100 px-2 py-1 rounded">
                  <span className="text-green-800 text-xl rounded-sm p-2">
                    ✓ In Stock
                  </span>
                </div>
              )}
              {!inStock && (
                <div className="flex items-center gap-2 bg-red-100 px-2 py-1 rounded">
                  <span className="text-red-800 text-xl rounded-sm p-2">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
            <div className="text-green-600 text-xl font-medium">
              You save: {discount.toLocaleString()} Tk ({discountPercentage}%)
            </div>
            {taxInclusive && (
              <div className="text-xl text-gray-600">(Inclusive of all taxes)</div>
            )}
          </div>

          <hr className="w-full border-t-2 border-black" />

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl text-gray-900">Description :</h3>
            <p className="text-gray-700 text-xl leading-relaxed">{description}</p>
          </div>

          {/* Offers and Discounts */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Offers and Discounts</h3>
            <div className="flex gap-3">
              <button className="px-4 py-4 border border-gray-300 rounded-lg text-xl hover:bg-red-500">
                No Cost EMI on Credit Card
              </button>
              <button className="px-6 py-4 border border-gray-300 rounded-lg text-xl hover:bg-red-500">
                Pay Later & Avail Cashback
              </button>
            </div>
          </div>

          {/* Delivery info */}
          <div className="flex items-center gap-2 text-black">
            <Truck width={20} className="w-5 h-5" />
            <span className="text-xl">We deliver! Just say when and how.</span>
          </div>

          <hr className="w-full border-t-2 border-black" />

          {/* Quantity and Add to Cart */}
          <div className="space-y-4 flex gap-4 pt-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-xl">QTY:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={decrementQuantity}
                  className="p-2 hover:bg-gray-100 rounded-l-lg"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-8 h-6" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 hover:bg-gray-100 rounded-r-lg"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-8 h-6" />
                </button>
              </div>
            </div>

            <button className="w-full bg-black text-2xl text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-500 transition-colors">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

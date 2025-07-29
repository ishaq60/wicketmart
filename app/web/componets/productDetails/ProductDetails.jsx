"use client";
import React, { useState } from "react";
import { Star, StarHalf, Minus, Plus, Truck } from "lucide-react";
import image1 from "../../../../public/Image/products/bats/zip/001.jpg";
import image2 from "../../../../public/Image/products/bats/zip/002.jpg";
import Image from "next/image";
const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [image1, image2];

  const mainImage = images[selectedImage];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const StarRating = ({ rating = 2 }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-8 h-6 ${
              i < rating ? "fill-black text-black" : "text-gray-300"
            }`}
          />
        ))}
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
                  width={200} // ✅ required for next/image
                  height={204} // ✅ required for next/image
                  className="w-full  h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 max-w-md">
            <Image
              src={mainImage}
              alt="SG klr Xtreme English Willow Short Handle Cricket bat"
              width={300} // <-- Replace with actual dimensions
              height={300} // <-- Replace with actual dimensions
              className="w-full ml-12  h-auto object-contain"
            />
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-black">
            SG klr Xtreme English Willow Short Handle Cricket bat
          </h1>

          {/* Brand and type */}
          <div className="text-gray-800">
            <span className="text-2xl">
              Short Handle Cricket bat , Brand: SG
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center text-black gap-2">
            <StarRating className="text-red-400 w-3xl" rating={3} />
            <span className="text-xl">| 2 Ratings</span>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">14,950Tk</span>
              <span className="text-lg text-gray-500 line-through">
                23,000 Tk
              </span>
              <div className="flex items-center gap-2 bg-green-100 px-2 py-1 rounded">
                <span className="text-green-800 text-xl rounded-sm p-2">
                  ✓ In Stock
                </span>
              </div>
            </div>
            <div className="text-green-600 text-xl font-medium">
              You save: ₹8,050 (35%)
            </div>
            <div className="text-xl text-gray-600">
              (Inclusive of all taxes)
            </div>
          </div>
          <hr className="w-full border-t-2 border-black" />

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl text-gray-900">
              Description :
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed">
              Superb Quality Grip made for maximum stability while playing shots
              Custom-made to meet international player's requirement In-box
              Contents: 1 World's finest & rare top grade English willow
            </p>
          </div>

          {/* Offers and Discounts */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">
              Offers and Discounts
            </h3>
            <div className="flex gap-3">
              <button className="px-4  py-4 border border-gray-300 rounded-lg text-xl hover:bg-red-500">
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
                >
                  <Minus className="w-8 h-6" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 hover:bg-gray-100 rounded-r-lg"
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

'use client';

import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";
import useAllProducts from "@/app/Hooks/useAllProducts";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";

// ⭐ Star Rating Component
const StarRating = ({ rating = 0 }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const isFilled = i < filledStars;
        const isHalf = i === filledStars && halfStar;

        return (
          <Star
            key={i}
            className={`w-4 h-4 ${
              isFilled || isHalf
                ? "fill-yellow-500 text-yellow-500"
                : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
};

export default function TrendingProduct() {
  const dispatch = useDispatch();
  const { products } = useAllProducts();

  if (!products || products.length === 0) {
    return (
      <div className="w-full py-16 flex justify-center items-center">
        <p className="text-gray-500">No trending products available.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl mt-20 font-bold text-center">Trending Products</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20 justify-center items-stretch">
        {products.slice(0, 8).map((product) => {
          const handleAdd = () => {
            dispatch(addToCart({
              id: product._id,
              name: product.name,
              price: product.price,
              image: product.images?.[0],
              quantity: 1, // ✅ always provide quantity
            }));
          };

          return (
            <div
              key={product._id}
              className="w-full max-w-[300px] h-[520px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <Link
                href={`/sProduct/${product._id}`}
                className="flex-grow flex flex-col justify-between"
              >
                {/* Image */}
                <div className="bg-gray-50 flex justify-center items-center py-6">
                  <Image
                    src={product?.images?.[0] || "/placeholder.jpg"}
                    width={150}
                    height={170}
                    alt="product image"
                    className="object-contain h-[170px] w-auto"
                  />
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col mt-2 justify-between flex-grow">
                  <h3 className="text-sm font-medium text-gray-900 mb-1 truncate">
                    {product?.name}
                  </h3>

                  <div className="flex items-center mb-2">
                    <StarRating rating={product?.averageRating || 0} />
                    <span className="text-sm text-gray-500 ml-1">
                      ({product?.totalReviews || 0})
                    </span>
                  </div>

                  <p className="text-sm mt-2 text-gray-600 line-clamp-2">
                    {product?.description}
                  </p>

                  <div className="flex items-center mt-4 space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ৳{product?.price || "11700"}
                    </span>
                    <span className="text-sm text-gray-500 line-through decoration-red-500">
                      ৳{product?.originalPrice || "18000"}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <button
                onClick={handleAdd}
                className="w-full mt-auto bg-black text-white py-3 text-md font-semibold hover:bg-red-600 transition-colors duration-200"
              >
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

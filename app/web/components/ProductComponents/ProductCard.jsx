"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Image from "next/image";
import Loadingred from "../loadingred";
import Pagination from "./Pagination";
import Useproduct from "@/app/Hooks/Useproduct";
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
// minRating, setMinRating
export default function ProductCard({selectedCategory,minPrice,maxPrice,minRating,exactRating}) {
  console.log("in card page",selectedCategory)
 const dispatch = useDispatch();
console.log("api class", minPrice,maxPrice,minPrice)
const [products, setProducts] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const pageSize = 8;
const [totalProducts, setTotalProducts] = useState(0);

// ✅ Use totalProducts here — not Useproduct
const totalPages = Math.ceil(totalProducts / pageSize);

useEffect(() => {
  const fetchProducts = async () => {
    const res = await fetch(`/api/pagination?page=${currentPage}&pageSize=${pageSize}&category=${selectedCategory}&rating=${exactRating}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    const data = await res.json();
    console.log(data);
    setProducts(data.products);
    setTotalProducts(data.total);
  };

  fetchProducts();
}, [currentPage,selectedCategory,maxPrice,minPrice,exactRating]);

const handlePageClick = (page) => setCurrentPage(page);
const handlePrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);
const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
const handleFirst = () => setCurrentPage(1);
const handleLast = () => setCurrentPage(totalPages);

if (!products || products.length === 0) {
  return (
    <div className="w-full py-16 flex justify-center items-center">
      <Loadingred />
    </div>
  );
}


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl mt-5 font-bold text-center">Products</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 justify-center items-stretch">
        {products?.map((product) => {
          const handleAdd = () => {
            dispatch(
              addToCart({
                id: product._id,
                name: product.name,
                price: product.price,
                image: product.images?.[0],
                quantity: 1,
              })
            );
            toast.success(`${product.name} added to cart!`);
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
                <div className="bg-gray-50 flex justify-center items-center py-6">
                  <Image
                    src={product?.images?.[0] || "/placeholder.jpg"}
                    width={150}
                    height={170}
                    alt="product image"
                    className="object-contain h-[170px] w-auto"
                  />
                </div>

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

      {/* ✅ Pass props correctly */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageClick={handlePageClick}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleFirst={handleFirst}
        handleLast={handleLast}
      />
    </div>
  );
}

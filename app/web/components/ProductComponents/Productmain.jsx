"use client"
import React, { useState } from 'react';
import ProductSlice from './ProductSlice';
import ProductCard from './ProductCard';


const Productmain = () => {
     const [selectedCategory, setSelectedCategory] = useState("All");
     const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(0);
const [minRating, setMinRating] = useState(0);
const [exactRating,setExactRating]=useState()
console.log(minRating)
     console.log(selectedCategory)
     console.log("min and max fffffrom main",minPrice,maxPrice,minRating)
     console.log(exactRating)
    return (
        <div>
          <div className="min-h-screen">
      <p className="text-xl font-semibold m-4">This is product page</p>

      <div className="flex sm:gap-y-36 flex-col lg:flex-row gap-4 w-full p-4">
        {/* Sidebar (25% width on large screens) */}
        <div className="w-full  min-h-screen lg:w-1/4 border border-gray-200 shadow-lg rounded-md p-4">
          <ProductSlice selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice}setMaxPrice={setMaxPrice} minRating={minRating} setExactRating={setExactRating}/>
        </div>

        {/* Main Product Area (75% width on large screens) */}
        <div className="w-full min-h-screen   mx-0  lg:w-3/4 border shadow-xl rounded-md p-4">
          <ProductCard selectedCategory={selectedCategory} minPrice={minPrice} maxPrice={maxPrice} minRating={minRating} setMinRating={setMinRating}  exactRating={exactRating} ></ProductCard>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Productmain;
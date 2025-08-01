"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

const ProductSlice = ({
  className,
  setSelectedCategory,
  minPrice,
  maxPrice,
  setMaxPrice,
  setMinPrice,
  selectedCategory,
setMinRating ,
setExactRating,
  onCategoryChange,
  ...props
}) => {
  const categories = [
    "All",
    "Bat",
    "Ball",
    "Bag",
    "Helmet",
    "Cricket Kits",
    "Batting Gloves",
    "Batting Pads",

    "Stumps",
    "Shoe",
    "Clothing",
    "Accessories",
  ];

  const StarRating = ({ rating = 2 }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-6 ${
              i < rating ? "fill-black text-black" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // ✅ State for selected category

  // ✅ Called when category changes
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    if (onCategoryChange) {
      onCategoryChange(value); // send up to parent
    }
  };
  console.log(minPrice, maxPrice);
  return (
    <div className="p-4 bg-white rounded-md">
      <h1 className="text-3xl text-center font-bold text-[#414141] ">Price</h1>

      <div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("text-center h-[10px] w-[50%] mx-auto", className)}
          {...props}
        />
      </div>

     <div className="mt-2 flex justify-center items-center gap-x-4">
  <Select onValueChange={(value) => setMinPrice(Number(value))}>
    <SelectTrigger className="w-[120px]">
      <SelectValue placeholder="Min Price" />
    </SelectTrigger>
    <SelectContent className="z-[1000]">
      <SelectGroup>
        <SelectLabel>Prices</SelectLabel>
        <div className="bg-gray-600 text-white">
          <SelectItem value="100">100</SelectItem>
          <SelectItem value="5000">5000</SelectItem>
          <SelectItem value="10000">10000</SelectItem>
        </div>
      </SelectGroup>
    </SelectContent>
  </Select>

  <h1 className="text-2xl">To</h1>

  <Select onValueChange={(value) => setMaxPrice(Number(value))}>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Max Price" />
    </SelectTrigger>
    <SelectContent className="z-[1000]">
      <SelectGroup>
        <SelectLabel>Prices</SelectLabel>
        <div className="bg-gray-600 text-white">
          <SelectItem value="5000">5000</SelectItem>
          <SelectItem value="10000">10000</SelectItem>
          <SelectItem value="20000">20000</SelectItem>
        </div>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>


      <hr className="w-full border-t-1 mt-12 border-black" />

      <h1 className="text-3xl ml-8  font-bold relative text-[#414141] mt-4">
        Categories
      </h1>

      <div className="flex flex-col gap-4">
        <RadioGroup
          className="flex flex-col gap-4"
          value={selectedCategory}
          onValueChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <div key={index} className="flex items-center space-x-3">
              <RadioGroupItem value={category} id={`cat-${index}`} />
              <Label
                htmlFor={`cat-${index}`}
                className="text-2xl hover:text-red-500"
              >
                {category}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <hr className="w-full border-t-1 mt-8 border-black" />

      <h1 className="text-3xl mt-4 text-center font-bold text-[#414141] mb-4">
        Ratings Above
      </h1>

<RadioGroup onValueChange={(value) => setExactRating(Number(value))} defaultValue="">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="" id="rAny" />
    <Label htmlFor="rAny">All Ratings</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="5" id="r5" />
    <Label htmlFor="r5">5⭐</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="4" id="r4" />
    <Label htmlFor="r4">4⭐</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="3" id="r3" />
    <Label htmlFor="r3">3⭐</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="2" id="r3" />
    <Label htmlFor="r3">2⭐</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="1" id="r3" />
    <Label htmlFor="r3">1⭐</Label>
  </div>
</RadioGroup>


    </div>
  );
};

export default ProductSlice;

"use client";

import React from "react";
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

// import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const ProductSlice = ({ className, ...props }) => {
    const categories = [
    "Cricket Kits",
    "Batting Gloves",
    "Batting Pads",
    "Bats",
    "Bags",
    "Helmets",
    "Balls",
    "Stumps",
    "Shoes",
    "Clothing",
    "Accessories",
  ];
  return (
    <div className="p-4 bg-white rounded-md">
      <h1 className="text-3xl text-center font-bold text-[#414141] mb-4">
        Price
      </h1>

      <div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("text-center h-[20px] w-[50%] mx-auto", className)}
          {...props}
        />
      </div>

      <div className="mt-10 flex justify-center items-center gap-x-4">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select a price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Prices</SelectLabel>
              <SelectItem value="5000">5000</SelectItem>
              <SelectItem value="1000">1000</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <h1 className="text-2xl">To</h1>

        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-black">Prices</SelectLabel>
              <SelectItem value="5000">5000</SelectItem>
              <SelectItem value="1000">1000</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <hr className="w-full border-t-1 mt-12 border-black" />
      <h1 className="text-3xl ml-8 mt-10 font-bold text-[#414141] mb-4">
        Categories
      </h1>
       <div className="flex flex-col gap-4">
      <RadioGroup className="flex flex-col gap-4" defaultValue="Cricket Kits">
      {categories.map((category, index) => (
        <div key={index} className="flex items-center space-x-3">
          <RadioGroupItem value={category} id={`cat-${index}`} />
          <Label htmlFor={`cat-${index}`} className="text-2xl hover:text-red-500">
            {category}
          </Label>
        </div>
      ))}
    </RadioGroup>
    </div>
    </div>
  );
};

export default ProductSlice;

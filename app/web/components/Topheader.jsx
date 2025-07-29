
import { ChevronDown, MapPin } from "lucide-react";
import React from "react";

const Topheader = () => {
  return (
    <div className="w-full bg-gray-900 text-white"  style={{ backgroundColor: "rgb(37, 37, 37)" }}>
      <div className=" mx-auto flex justify-between py-4 items-center px-4 h-[50px]">
        
        {/* Left */}
        <div className="text-xl py-4 text-center ">
          We Offer's Free Shipping
        </div>

        {/* Center */}
        <div className="flex items-center  text-sm font-medium space-x-1 cursor-pointer hover:text-gray-300">
          <MapPin size={20} />
          <span className="text-sm">FIND LOCATION</span>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-sm font-medium space-x-1 cursor-pointer hover:text-gray-300">
            <span role="img" aria-label="flag">🇮🇳</span>
            <span>BD</span>
            <ChevronDown size={14} />
          </div>
         <span
  className="text-md font-medium cursor-pointer hover:text-gray-300 px-4 py-1"
  style={{ backgroundColor: "rgb(75, 66, 66)" }}
>
  Sign Up
</span>

        </div>

      </div>
    </div>
  );
};

export default Topheader;

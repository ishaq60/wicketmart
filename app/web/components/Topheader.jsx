import { ChevronDown, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Topheader = () => {
  return (
    <div
      className="w-full text-white"
      style={{ backgroundColor: "rgb(37, 37, 37)" }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 md:h-[50px] space-y-2 md:space-y-0">
        {/* Left */}
        <div className="text-base md:text-xl text-center">
          We Offer's Free Shipping
        </div>

        {/* Center */}
        <div className="flex items-center text-sm font-medium space-x-1 cursor-pointer hover:text-gray-300">
          <MapPin size={20} />
          <span className="text-sm">FIND LOCATION</span>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-sm font-medium space-x-1 cursor-pointer hover:text-gray-300">
            <span role="img" aria-label="flag">
              🇮🇳
            </span>
            <span>BD</span>
            <ChevronDown size={14} />
          </div>
          <Link href={"/signup"}>
          <span
            className="text-md font-medium cursor-pointer hover:text-gray-300 px-4 py-1"
            style={{ backgroundColor: "rgb(75, 66, 66)" }}
          >
            Sign Up
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topheader;

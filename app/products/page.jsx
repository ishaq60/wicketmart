import React from "react";
import ProductSlice from "../web/componets/ProductComponents/ProductSlice";
import ProductCard from "../web/componets/ProductComponents/productCard";


const Productpage = () => {
  return (
    <div className="min-h-screen">
      <p className="text-xl font-semibold m-4">This is product page</p>

      <div className="flex sm:gap-y-36 flex-col lg:flex-row gap-4 w-full p-4">
        {/* Sidebar (25% width on large screens) */}
        <div className="w-full sm:h-[750px] mx-h-[750px] h-auto lg:h-[1050px] lg:w-1/4 border border-gray-200 shadow-lg rounded-md p-4">
          <ProductSlice />
        </div>

        {/* Main Product Area (75% width on large screens) */}
        <div className="w-full min-h-screen   mx-0  lg:w-3/4 border shadow-xl rounded-md p-4">
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
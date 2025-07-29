
import Hero from "./web/componets/Hero";


import Productpage from "./FeaturedProduct/page";
import TrendingProduct from "./web/componets/TrendingProduct";

export default function Home() {
  return (
    <div className="mt-2 min-h-screen">
      <div className="w-full mb-10">
        <Hero></Hero>
      </div>
      <div className="mb-100">
       <Productpage></Productpage>

       <TrendingProduct></TrendingProduct>
      </div>
    </div>
  );
}

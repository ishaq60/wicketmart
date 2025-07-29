




import Productpages from "./FeaturedProduct/page";
import Hero from "./web/components/Hero";
import TrendingProduct from "./web/components/TrendingProduct";




export default function Home() {
  return (
    <div className="mt-2 min-h-screen">
      <div className="w-full mb-10">
        <Hero></Hero>
      </div>
      <div className="mb-100">
       <Productpages></Productpages>

       <TrendingProduct></TrendingProduct>
      </div>
    </div>
  );
}

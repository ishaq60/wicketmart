import { Button } from "@/components/ui/button";
import Hero from "./web/componets/Hero";
import Productpage from "./products/page";



export default function Home() {
  return (
    <div className="mt-2" >
<div className="w-full mb-10"><Hero></Hero></div>
<div className="mb-100">

<Productpage></Productpage>



</div>
    </div>
  );
}

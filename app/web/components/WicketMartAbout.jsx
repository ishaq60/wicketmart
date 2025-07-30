"use client"
import { Image } from 'lucide-react';
import React from 'react';
import image from "../../../public/Image/about/tc.jpg"
export default function WicketMartAbout() {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white">
      {/* About Us Section */}
      <div className="flex gap-8 mb-16">
        {/* Stadium Image */}
      <div className="w-1/3">
  <Image
    src={image}
    alt="image"
    className="w-full h-64 object-cover rounded-lg shadow-md"
    width={300}
    height={256}
  />
</div>

        
        {/* About Us Content */}
        <div className="w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              WicketMart stands as an online cricket sports selling startup established in 
              2019. We have served more than 20,000 customers through social media 
              and online platforms. We are proud to offer our own products under the 
              brand name WM, also known as 'Wicket Mart'.
            </p>
            
            <p>
              WicketMart was founded by Lokesh Sarwani, a talented cricket player 
              who has represented the Under 16 and Under 19 teams. Lokesh started 
              as a cricket enthusiast and received a tremendously positive public 
              response. He has sold cricket equipment to more than 20,000 customers 
              till date. Now, he aims to expand his business to an international level by 
              launching his own website and introducing new and genuine cricket 
              products at competitive prices.
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Who We Are</h2>
        
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <p>
            WicketMart is dedicated to providing high-quality cricket equipment and accessories to cricket enthusiasts across Bangladesh. Our mission is to empower 
            cricketers with the best tools to enhance their performance on the field. With a focus on innovation, craftsmanship, and customer satisfaction, we have 
            become a trusted brand in the cricket community.
          </p>
          
          <p>
            Since our inception in 2019, we have built a strong customer base and expanded our product range to cater to the diverse needs of players at every level. 
            We take pride in offering genuine cricket products that are carefully curated and tested for quality and performance. Our team of experts works closely 
            with manufacturers to ensure that our customers receive top-notch products.
          </p>
          
          <p>
            At WicketMart, we believe in fostering long-term relationships with our customers. We provide excellent customer service and strive to exceed 
            expectations at every step. We are committed to delivering a seamless online shopping experience and ensuring customer satisfaction. Join us on this 
            exciting journey as we continue to grow and expand our reach in the world of cricket.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Mission</h2>
        
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <p>
            WicketMart is driven by the mission to provide high-quality cricket equipment and accessories at affordable prices in Bangladesh. We aim to make cricket accessible 
            to players nationwide and support their passion for the sport. Our mission is to offer a wide range of cricket equipment, including bats, balls, protective 
            gear, and accessories, that meet the highest standards of quality and performance.
          </p>
          
          <p>
            We are committed to continuously innovating and improving our product range to meet the evolving needs of cricketers. Our team of experts works closely 
            with manufacturers and conducts rigorous quality testing to ensure that every product we offer delivers exceptional performance on the field. We believe 
            that every player deserves the best tools to enhance their skills and achieve their cricketing goals.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-900 transition-colors">
          OUR PRODUCTS
        </button>
        <button className="px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-900 transition-colors">
          CONTACT US
        </button>
      </div>
    </div>
  );
}
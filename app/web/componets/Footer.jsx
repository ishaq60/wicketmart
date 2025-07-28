import React from "react";
import {
  Truck,
  Shield,
  Tag,
  CreditCard,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function CricketWeaponFooter() {
  return (
    <div className="bg-black text-white h-[550px]">
      {/* Top Features Section */}
      <div className="bg-black py-6">
        <div className="max-w-7xl  mx-auto px-4">
          <div className="grid grid-cols-1 h-25 rounded-xl md:grid-cols-4 gap-6">
            {/* Express Delivery */}
            <div
              className="flex  text-center items-center rounded-xl shadow-xl space-x-2"
              style={{ backgroundColor: "hsla(0,0%,6%,.95)" }}
            >
              <div className="bg-red-600 mx-12 p-2 rounded">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-white  font-medium text-sm">
                  Express Delivery
                </h3>
                <p className="text-white  text-[14px]">Ships in 24 Hours</p>
              </div>
            </div>

            {/* Brand Warranty */}
            <div className="flex items-center shadow-2xl space-x-3 rounded-xl" style={{ backgroundColor: "hsla(0,0%,6%,.95)" }}>
              <div className="bg-red-600 p-2 mx-8 rounded">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  Brand Warranty
                </h3>
                <p className="text-white  text-[14px]">100% Original Products</p>
              </div>
            </div>

            {/* Exciting Deals */}
            <div className="flex items-center space-x-3" style={{ backgroundColor: "hsla(0,0%,6%,.95)" }} >
              <div className="bg-red-600 p-2 rounded">
                <Tag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  Exciting Deals
                </h3>
                <p className="text-white  text-[14px]">On all prepaid orders</p>
              </div>
            </div>

            {/* Secure Payments */}
            <div className="flex items-center rounded-xl space-x-3" style={{ backgroundColor: "hsla(0,0%,6%,.95)" }}>
              <div className="bg-red-600 p-2 mx-8 rounded">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  Secure Payments
                </h3>
                <p className="text-white  text-[14px]">
                  SSL / Secured certificate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className=" py-20 mt-8"  style={{ backgroundColor: "hsla(0,0%,6%,.95)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Newsletter Section */}
            <div className="md:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CW</span>
                </div>
                <span className="text-white font-medium">Wicket Mart</span>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-white font-medium mb-4 text-sm">
                  Newsletter
                </h3>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full bg-gray-800 text-white px-3 py-2 text-xl border border-gray-700 focus:border-red-600 focus:outline-none"
                  />
                  <p className="text-white  text-[14px]">
                    By submitting your email address you agree to our{" "}
                    <span className="text-red-500">Terms & Conditions</span>
                  </p>
                  <button className="w-full bg-red-600 text-white py-2 text-xl font-medium hover:bg-red-700 transition-colors">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-white font-medium mb-4 text-xl">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00] text-[14px]"
                  >
                    Track Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Cancel Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Return Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Warranty Info
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies Section */}
            <div>
              <h3 className="text-white font-medium mb-4 text-xl">Policies</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Sitemap
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    T&C
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-white font-medium mb-4 text-xl">Company</h3>
              <ul className="space-y-2 ">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Service Centres
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#f00]  text-[14px]"
                  >
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App Section */}
            <div>
              <h3 className="text-white font-medium mb-4 text-xl">
                Download app
              </h3>
              <div className="space-y-3">
                {/* App Store Buttons */}
                <div className="space-y-2">
                  <div className="bg-gray-800 border border-gray-700 px-3 py-2 rounded flex items-center space-x-2 cursor-pointer hover:bg-gray-700">
                    <div className="text-green-500 text-lg">▶</div>
                    <div>
                      <p className="text-white  text-[14px]">GET IT ON</p>
                      <p className="text-white  text-[14px] font-medium">
                        Google Play
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 px-3 py-2 rounded flex items-center space-x-2 cursor-pointer hover:bg-gray-700">
                    <div className="text-white text-lg">🍎</div>
                    <div>
                      <p className="text-white  text-[14px]">Download on the</p>
                      <p className="text-white  text-[14px] font-medium">
                        App Store
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-3 w-5xl pt-4">
                  <a
                    href="#"
                    className="bg-blue-600 p-2 rounded hover:bg-blue-700"
                  >
                    <Facebook className="w-8 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 p-2 rounded hover:bg-blue-500"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 p-2 rounded hover:bg-red-700"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 p-2 rounded hover:bg-blue-800"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-4 border-t h-28 text-center border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex space-x-6 mt-8  text-xl">
              <a href="#" className="text-white hover:text-[#f00]">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-[#f00]">
                TERMS & CONDITIONS
              </a>
              <a href="#" className="text-white hover:text-[#f00]">
                TERMS OF USE
              </a>
            </div>
            <div className="text-white hover:text-[#f00] text-xl">
              © 2025 | Wicket Mart, All Rights Reserved. | Built by Iam_DEV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

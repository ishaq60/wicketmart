"use client"
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

export default function Footer() {
  return (
    <div className="bg-black text-white">
      {/* Top Features Section */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Feature Box */}
            {[
              {
                icon: <Truck className="w-6 h-6 text-white" />,
                title: "Express Delivery",
                desc: "Ships in 24 Hours",
              },
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: "Brand Warranty",
                desc: "100% Original Products",
              },
              {
                icon: <Tag className="w-6 h-6 text-white" />,
                title: "Exciting Deals",
                desc: "On all prepaid orders",
              },
              {
                icon: <CreditCard className="w-6 h-6 text-white" />,
                title: "Secure Payments",
                desc: "SSL / Secured certificate",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-xl shadow-xl"
                style={{ backgroundColor: "hsla(0,0%,6%,.95)" }}
              >
                <div className="bg-red-600 p-2 rounded">{item.icon}</div>
                <div>
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-[14px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-20 mt-8" style={{ backgroundColor: "hsla(0,0%,6%,.95)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo + Newsletter */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CW</span>
                </div>
                <span className="font-medium">Wicket Mart</span>
              </div>

              <h3 className="font-medium mb-4 text-sm">Newsletter</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full bg-gray-800 text-white px-3 py-2 text-sm border border-gray-700 focus:border-red-600 focus:outline-none"
                />
                <p className="text-[14px]">
                  By submitting your email you agree to our{" "}
                  <span className="text-red-500">Terms & Conditions</span>
                </p>
                <button className="w-full bg-red-600 text-white py-2 text-sm font-medium hover:bg-red-700 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* Footer Sections */}
            {[
              {
                title: "Help",
                items: ["Track Order", "FAQs", "Cancel Order", "Return Order", "Warranty Info"],
              },
              {
                title: "Policies",
                items: ["Return Policy", "Security", "Sitemap", "Privacy Policy", "T&C"],
              },
              {
                title: "Company",
                items: ["About Us", "Contact Us", "Service Centres", "Careers", "Affiliates"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-medium mb-4 text-xl">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="hover:text-[#f00] text-[14px]">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* App + Social */}
            <div>
              <h3 className="font-medium mb-4 text-xl">Download app</h3>
              <div className="space-y-3">
                {/* App Store Buttons */}
                {[
                  {
                    icon: "▶",
                    title: "GET IT ON",
                    subtitle: "Google Play",
                  },
                  {
                    icon: "🍎",
                    title: "Download on the",
                    subtitle: "App Store",
                  },
                ].map((btn, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 border border-gray-700 px-3 py-2 rounded flex items-center space-x-2 cursor-pointer hover:bg-gray-700"
                  >
                    <div className="text-white text-lg">{btn.icon}</div>
                    <div>
                      <p className="text-[14px]">{btn.title}</p>
                      <p className="text-[14px] font-medium">{btn.subtitle}</p>
                    </div>
                  </div>
                ))}

                {/* Social Media Icons */}
                <div className="flex space-x-3 pt-4">
                  <a href="#" className="bg-blue-600 p-2 rounded hover:bg-blue-700">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="bg-blue-400 p-2 rounded hover:bg-blue-500">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="bg-pink-600 p-2 rounded hover:bg-red-700">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="bg-blue-700 p-2 rounded hover:bg-blue-800">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 border-t text-center border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm sm:text-base">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4">
              <a href="#" className="hover:text-[#f00]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#f00]">
                TERMS & CONDITIONS
              </a>
              <a href="#" className="hover:text-[#f00]">
                TERMS OF USE
              </a>
            </div>
            <div className="text-center">
              © 2025 | Wicket Mart, All Rights Reserved. | Built by Iam_DEV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

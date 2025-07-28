"use client"
import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Link } from "lucide-react";
import { IoMdArrowDropdown  } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { id: "home", name: "Home", href: "/" },
    { id: "product", name: "Product", href: "/products" },
    { id: "contact", name: "Contact", href: "/contact" },
    { id: "about", name: "About", href: "/about" },
  ];

  return (
    <div className="w-full">
      {/* Main Header */}
      <div className="w-full h-[120px] bg-white shadow-md relative z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left Side - Mobile Menu + Logo */}
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <div className="lg:hidden mr-4">
                <button
                  className="text-[#121212] hover:text-red-600 transition-colors duration-300 p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

              {/* Logo */}
              <a   href="/" className="flex items-center">
                <div className="w-16 h-8 bg-black rounded flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
              </a>
            </div>

            {/* Center - Desktop Navigation */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={link.href} 
                      className="text-[#121212] font-semibold text-xl hover:text-red-600 px-8 py-2   transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Action Icons */}
            <div className="flex items-center space-x-2">
              {/* Search Bar */}
              <div className="relative flex items-center">
                {isSearchOpen ? (
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
                    <Search size={35} className="text-black mr-3" />
                    <input
                      type="text"
                      placeholder="Search........"
                      className="flex-1 bg-transparent outline-none text-[#121212] placeholder-gray-500"
                      autoFocus
                    />
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="ml-2 text-[#121212] hover:text-red-600"
                    >
                      <X size={30} />
                    </button>
                  </div>
                ) : (
                  <button 
                    className="text-[#121212] hover:text-red-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
                    onClick={() => setIsSearchOpen(true)}
                  >
                   <ImSearch size={35}/>
                  </button>
                )}
              </div>
              
              <button className="relative text-[#121212] hover:text-red-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full">
          
                <IoCart  size={35} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  1
                </span>
              </button>
              <div className="relative">
                <button 
                  className="text-[#121212] hover:text-red-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <div className="flex">
                  <FaUserAlt size={35} /> <IoMdArrowDropdown size={25} className="mt-2"></IoMdArrowDropdown>
                  </div>
                </button>
                
                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-[350px] h-[400px] p-4 bg-[#121212] text-white rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="font-semibold text-lg text-center">Welcome!</h3>
                      <p className="text-md text-white  text-center">To access your account and <br /> manage orders, please log in.</p>
                    </div>
                    <div className="py-2">
                      <a href="/profile" className="flex items-center text-xl px-4 py-3 hover:bg-[#ed1c24] transition-colors">
                        <User size={35} className="mr-3" />
                        Profile
                      </a>
                      <a   href="/orders" className="flex items-center  text-xl px-4 py-3 hover:bg-[#ed1c24] transition-colors">
                        <div className="w-4 h-4 mr-3">📋</div>
                        Orders
                      </a>
                      <a   href="/cart" className="flex items-center px-4  text-xl py-3 hover:bg-[#ed1c24] transition-colors">
                        <ShoppingCart size={36} className="mr-3" />
                        Cart
                      </a>
                      <a   href="/login" className="flex items-center px-4 py-3  text-xl hover:bg-[#ed1c24] transition-colors">
                        <div className="w-4 h-4 mr-3">🔓</div>
                        Login
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed left-0 top-0 h-full w-80 bg-[#121212] text-white z-50 lg:hidden transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-2">
                  <span className="text-black font-bold text-sm">W</span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-red-400 p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Country selector */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center text-sm">
                <span className="mr-2">🇮🇳</span>
                Bangladesh
              </div>
            </div>

            <div className="py-4 text-xl">
              <a   href="/" className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors">
                <div className="w-5 h-5 mr-4">🏠</div>
                Home
              </a>
              <a   href="/products" className="flex items-center px-6 py-4 bg-red-600 hover:bg-red-700 transition-colors">
                <div className="w-5 h-5 mr-4">📦</div>
                Products
              </a>
              <a href="/contact" className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors">
                <div className="w-5 h-5 mr-4">📞</div>
                Contact
              </a>
              <a href="/about" className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors">
                <div className="w-5 h-5 mr-4">ℹ️</div>
                About Us
              </a>
              <a   href="/account" className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors">
                <User size={20} className="mr-4" />
                Account
              </a>
              <a   href="/login" className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors">
                <div className="w-5 h-5 mr-4">🔐</div>
                Login
              </a>
            </div>
          </div>
        </>
      )}
      
      {/* Close search when clicking outside */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-50 w-full"
          onClick={() => setIsSearchOpen(false)}
        ></div>
      )}
      
      {/* Close user menu when clicking outside */}
      {isUserMenuOpen && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setIsUserMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
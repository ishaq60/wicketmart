"use client";
import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { data: session, status } = useSession();
  console.log(session)
  console.log(session?.user?.type);

  const navLinks = [
    { id: "home", name: "Home", href: "/" },
    { id: "product", name: "Product", href: "/products" },
    { id: "contact", name: "Contact", href: "/contact" },
    { id: "about", name: "About", href: "/about" },
  ];
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      {/* Main Navbar */}
      <div className="w-full h-[80px] bg-white shadow-md relative z-50">
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
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Logo */}
             <a href="/" className="flex items-center">
  <div className="w-full h-full rounded-2xl flex items-center justify-center mr-2">
  <svg
    className="rounded-sm w-[250px] sm:w-[100px] sm:h-[50px] max-w-full h-auto"
    viewBox="0 0 300 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Wicket Mart logo"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="cartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#b91c1c', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Black background */}
    <rect width="300" height="100" fill="#000000" />

    {/* Shopping cart icon */}
    <g transform="translate(10, 25)">
      {/* Cart body */}
      <path
        d="M5 10 L45 10 L42 35 L8 35 Z"
        fill="url(#cartGradient)"
        stroke="#dc2626"
        strokeWidth="1.5"
        rx="3"
      />
      {/* Cart handle */}
      <path
        d="M5 10 L5 5 Q5 2 8 2 L12 2"
        fill="none"
        stroke="#dc2626"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Cart wheels */}
      <circle cx="15" cy="42" r="3" fill="#dc2626" />
      <circle cx="35" cy="42" r="3" fill="#dc2626" />
      {/* Wicket stumps inside cart */}
      <g transform="translate(15, 15)">
        <rect x="8" y="0" width="1.5" height="12" fill="#fbbf24" />
        <rect x="12" y="0" width="1.5" height="12" fill="#fbbf24" />
        <rect x="16" y="0" width="1.5" height="12" fill="#fbbf24" />
        {/* Bails on top */}
        <rect x="8" y="-1.5" width="8" height="1" fill="#fbbf24" rx="0.5" />
      </g>
    </g>

    {/* Company name */}
    <text
      x="70"
      y="42"
      fontFamily="Arial, sans-serif"
      fontSize="22"
      fontWeight="bold"
      fill="white"
    >
      Wicket
    </text>
    <text
      x="70"
      y="65"
      fontFamily="Arial, sans-serif"
      fontSize="22"
      fontWeight="bold"
      fill="white"
    >
      Mart
    </text>

    {/* Tagline */}
    <text
      x="70"
      y="78"
      fontFamily="Arial, sans-serif"
      fontSize="8"
      fill="#dc2626"
      fontStyle="italic"
    >
      Your Cricket Shopping Destination
    </text>
  </svg>
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
                      className="text-[#121212] font-semibold text-md hover:text-red-600 px-8 py-2   transition-colors duration-300"
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
                    <Search size={30} className="text-black mr-3" />
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
                    <ImSearch size={30} />
                  </button>
                )}
              </div>

              <Link href="/cart">
                <button className="relative text-[#121212] hover:text-red-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full">
                  <IoCart size={30} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItems.length}
                  </span>
                </button>
              </Link>
              <div className="relative">
                <button
                  className="text-[#121212] hover:text-red-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <div className="flex">
                    <FaUserAlt size={30} />{" "}
                    <IoMdArrowDropdown
                      size={25}
                      className="mt-2"
                    ></IoMdArrowDropdown>
                  </div>
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 w-[300px] h-[375px] p-2 bg-[#121212] text-white rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="font-semibold text-lg text-center">
                        Welcome!
                      </h3>
                      <p className="text-md text-white  text-center">
                        To access your account and <br /> manage orders, please
                        log in.
                      </p>
                    </div>
                    <div className="py-1">
                      <a
                        href="/profile"
                        className="flex items-center text-md px-4 py-2 hover:bg-[#ed1c24] transition-colors"
                      >
                        <User size={35} className="mr-3" />
                        profile
                      </a>
                      <a
                        href="/orders"
                        className="flex items-center  text-xl px-4 py-2 hover:bg-[#ed1c24] transition-colors"
                      >
                        <div className="w-4 h-4 mr-3">📋</div>
                        orders
                      </a>
                      <a
                        href="/cart"
                        className="flex items-center px-4  text-xl py-2 hover:bg-[#ed1c24] transition-colors"
                      >
                        <ShoppingCart size={36} className="mr-3" />
                        cart
                      </a>
                      {session?.user?.type === "admin" && (
                        <a
                          href="/dashboard"
                          className="flex items-center px-4  text-xl py-2 hover:bg-[#ed1c24] transition-colors"
                        >
                          <LayoutDashboard size={36} className="mr-3" />
                          Dashboard
                        </a>
                      )}

                      {status !== "authenticated" ? (
                        <a
                          href="/login"
                          className="flex items-center px-4 py-3 text-xl hover:bg-[#ed1c24] transition-colors"
                        >
                          <div className="w-4 h-4 mr-3">🔓</div>
                          Login
                        </a>
                      ) : (
                        <button
                          onClick={() => {
                            // ✅ Show toast first
                            toast.success("Logged out successfully");
                            // ✅ Then sign out with redirect
                            signOut({ callbackUrl: "/" });
                          }}
                          className="flex items-center w-full px-4 py-3 text-xl hover:bg-[#ed1c24] transition-colors"
                        >
                          <div className="w-4 h-4 mr-3">🔒</div>
                          Logout
                        </button>
                      )}
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
              <a
                href="/"
                className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors"
              >
                <div className="w-5 h-5 mr-4">🏠</div>
                Home
              </a>
              <a
                href="/products"
                className="flex items-center px-6 py-4 bg-red-600 hover:bg-red-700 transition-colors"
              >
                <div className="w-5 h-5 mr-4">📦</div>
                Products
              </a>
              <a
                href="/contact"
                className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors"
              >
                <div className="w-5 h-5 mr-4">📞</div>
                Contact
              </a>
              <a
                href="/about"
                className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors"
              >
                <div className="w-5 h-5 mr-4">ℹ️</div>
                About Us
              </a>
              {session?.user?.type === "admin" && (
                <a
                  href="/dashboard"
                  className="flex items-center px-4  text-xl py-2 hover:bg-[#ed1c24] transition-colors"
                >
                  <LayoutDashboard size={36} className="mr-3" />
                  Dashboard
                </a>
              )}
              <a
                href="/account"
                className="flex items-center px-6 py-4 hover:bg-[#ed1c24] transition-colors"
              >
                <User size={20} className="mr-4" />
                Account
              </a>
              {status !== "authenticated" ? (
                <a
                  href="/login"
                  className="flex items-center px-4 py-3 text-xl hover:bg-[#ed1c24] transition-colors"
                >
                  <div className="w-4 h-4 mr-3">🔓</div>
                  Login
                </a>
              ) : (
                <button
                  onClick={() => {
                    // ✅ Show toast first
                    toast.success("Logged out successfully");
                    // ✅ Then sign out with redirect
                    signOut({ callbackUrl: "/" });
                  }}
                  className="flex items-center w-full px-4 py-3 text-xl hover:bg-[#ed1c24] transition-colors"
                >
                  <div className="w-4 h-4 mr-3">🔒</div>
                  Logout
                </button>
              )}
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

export default Navbar;

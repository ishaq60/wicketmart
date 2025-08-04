"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, User, Upload } from "lucide-react";
import { toast } from "react-toastify";
import {  useRouter } from "next/navigation";

export default function Signupcomponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptTermsOfUse, setAcceptTermsOfUse] = useState(false);



  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  if (!acceptTerms || !acceptTermsOfUse) {
    toast.error("Please accept the terms and conditions.");
    return;
  }

  try {
    const resp = await fetch(`/api/signup`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const result = await resp.json();

    if (!resp.ok) {
      toast.error(result.error || "Signup failed");
      return;
    }

    toast.success("User created successfully");
    router.push("/");
  } catch (error) {
    console.error("Error during signup:", error);
    toast.error("Network error. Please try again.");
  }
};


  return (
    <div className="min-h-screen bg-gray-50 flex  justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-black rounded-full flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-black">
            Sign Up for an Account !
          </h2>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            />
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            />
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-700 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 z-50  text-black" />
              ) : (
                <Eye className="h-5 w-5 z-50 text-black" />
              )}
            </button>
          </div>

          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 z-50 text-black" />
              ) : (
                <Eye className="h-5 w-5 z-50 text-black" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <button
              type="button"
              className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors"
            >
              <Upload className="h-4 w-4 mr-2" />
              UPLOAD AVATAR
            </button>
          </div>

          <div className="space-y-3 mt-6">
            <div className="flex items-start">
              <input
                id="accept-terms"
                name="accept-terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="accept-terms" className="ml-2 text-sm text-black">
                I Accept The Cricket Weapon Terms & Conditions
              </label>
            </div>

            <div className="flex items-start">
              <input
                id="accept-terms-of-use"
                name="accept-terms-of-use"
                type="checkbox"
                checked={acceptTermsOfUse}
                onChange={(e) => setAcceptTermsOfUse(e.target.checked)}
                className="h-4 w-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="accept-terms-of-use" className="ml-2 text-sm text-black">
                I Accept The Cricket Weapon Terms Of Use
              </label>
            </div>
          </div>

          <div className="text-center text-sm text-black mt-4">
            I acknowledge Cricket Weapon will use my information in accordance with its{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Privacy Policy.
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              CREATE ACCOUNT
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-black">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
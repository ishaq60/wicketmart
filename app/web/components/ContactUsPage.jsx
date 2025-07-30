"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    issue: 'E-Commerce',
    detail: 'Others',
    language: 'English',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="border-b border-gray-300 pb-4 mb-8">
        <h1 className="text-xl font-semibold text-gray-800">Contact Us</h1>
      </div>

      {/* Need Help Section */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Need Help?</h2>
        
        <div className="mb-6">
          <p className="text-md text-black mb-1">
            We have live chat <span className="text-blue-600 underline cursor-pointer">available</span>, look for the chat icon in the lower right hand corner of this page. If it isn't there, then give us a call at <span className="text-blue-600 underline cursor-pointer">0170305......</span>
          </p>
        </div>

        <div className="mb-6 text-md text-black">
          <div>7:00-6:00 BDT Monday-Friday</div>
          <div>8:00-4:00 BDT Saturday</div>
          <div>Closed Sunday</div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-700">
            Catch us outside these hours? Fill out our support form below, and we'll be in touch shortly.
          </p>
        </div>

        <div className="mb-6 text-sm text-gray-700">
          <div className="font-medium">Wicketmart Store Pvt Ltd.</div>
          <div>18-1/30 Sec 22</div>
          <div>Noida, UP 201301</div>
          <div>India</div>
        </div>

        <div className="flex gap-4">
         <Link href={"/support"}>
          <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-900 transition-colors">
            SUPPORT FORM
          </button>
         </Link>
          <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-900 transition-colors">
            CALL US
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mb-8" />

      {/* Support Form Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Support Form</h2>
        
        <p className="text-sm text-gray-700 mb-8">
          Need a quicker answer? Look for our chat icon on the right hand side of this page.
        </p>

        <div className="space-y-6">
          {/* Issue Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ISSUE *
            </label>
            <select
              name="issue"
              value={formData.issue}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="E-Commerce">E-Commerce</option>
              <option value="Technical">Technical</option>
              <option value="Billing">Billing</option>
              <option value="General">General</option>
            </select>
          </div>

          {/* Detail Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              DETAIL *
            </label>
            <select
              name="detail"
              value={formData.detail}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Others">Others</option>
              <option value="Order Issue">Order Issue</option>
              <option value="Payment Issue">Payment Issue</option>
              <option value="Product Question">Product Question</option>
            </select>
          </div>

          {/* Language Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language *
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="English">English</option>
              <option value="Bengali">Bengali</option>
         
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              EMAIL *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email *"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              MESSAGE *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter Your Message *"
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              onClick={handleSubmit}
              className="px-8 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-900 transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
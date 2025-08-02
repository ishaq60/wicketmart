"use client"
import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ProfileSection() {
    const {data:session}=useSession()
    console.log(session)
  const [userDetails, setUserDetails] = useState({
    name: 'RANA AKSHAY',
    email: 'ADMIN01@GMAIL.COM',
    phone: '',
    gender: ''
  });

  const [showEditForm, setShowEditForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleEditDetails = () => {
    setShowEditForm(true);
  };

  const handleUpdatePassword = () => {
    setShowPasswordForm(true);
  };

  const handleLogout = () => {
    alert('Logging out from all devices...');
  };

  const handleViewOrders = () => {
    alert('Redirecting to orders page...');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{session?.user?.user}!</h1>
          <p className="text-black">Welcome back! Happy shopping!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Overview */}
          <div className="lg:col-span-1">
            {/* Profile Overview */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">PROFILE OVERVIEW</h2>
              
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">NAME :</p>
                  <p className="text-sm text-black">{session?.user.email}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">EMAIL :</p>
                  <p className="text-sm text-blue-600">{session?.user.email}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">MEMBER SINCE :</p>
                  <p className="text-sm text-black">09/06/2024, 02:47 PM</p>
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">ORDERS</h2>
             <Link href={"/orders"}>
              <button 
                onClick={handleViewOrders}
                className="w-full bg-black text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors"
              >
                ORDERS
              </button>
             </Link>
            </div>
          </div>

          {/* Right Column - Personal Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">PERSONAL INFORMATION</h2>
              <p className="text-sm text-black mb-8">Hey there ! Feel free to edit any of your details below so your account is up to date.</p>

              {/* My Details Section */}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-900 mb-6">MY DETAILS</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-black mb-1">{session?.user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-black mb-1">USER EMAIL</p>
                  </div>
                  <div>
                    <p className="text-sm text-black mb-1">PHONE NUMBER</p>
                  </div>
                  <div>
                    <p className="text-sm text-black mb-1">GENDER</p>
                  </div>
                </div>

                <button 
                  onClick={handleEditDetails}
                  className="w-full bg-black text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors mb-8"
                >
                  EDIT DETAILS
                </button>
              </div>

              {/* Login Details Section */}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-gray-900 mb-6">LOGIN DETAILS</h3>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">EMAIL</p>
                  <p className="text-sm text-blue-600 mb-4">{session?.user.email}</p>
                  
                  <p className="text-sm font-medium text-gray-900 mb-1">PASSWORD</p>
                  <p className="text-sm text-black mb-6">••••••••••••</p>
                </div>

                <button 
                  onClick={handleUpdatePassword}
                  className="w-full bg-black text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors mb-8"
                >
                  UPDATE PASSWORD
                </button>
              </div>

              {/* Logout Section */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-4">LOG OUT FROM ALL DEVICES</h3>
                <p className="text-sm text-black mb-6">To access the Cricket Weapon Store website again, you need to provide your credentials. This action will log you out from any other web browsers you have used before.</p>
                
                <button  onClick={() => signOut({ callbackUrl: '/' })}
                   className="w-full bg-black text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  <LogOut onClick={() => signOut()}  className="mr-2 h-4 w-4" />
                  LOGOUT ACCOUNT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
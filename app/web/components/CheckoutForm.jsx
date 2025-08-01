"use client";

import React, { useState } from 'react';
import { ShoppingCart, User, Mail } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function CheckoutForm() {
   const { data: session, status } = useSession();
    console.log(session?.user?.name);
const [formData, setFormData] = useState({
  name: session?.user?.name || '',
  email: session?.user?.email || ''
});

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(() => {
    const init = {};
    cartItems.forEach((item) => {
      init[item.id] = item.quantity || 1;
    });
    return init;
  });

  console.log(cartItems);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    const orderData = {
      customer: formData,
      items: cartItems,
      total: total,
      
    };

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || 'Order submission failed');
        return;
      }

      console.log('Order submitted:', result);
       toast.success('Order submitted successfully!');
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
       <div className='flex justify-between'>
           <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
           <Link className='bg-red-500 text-white underline p-2 font-bold rounded-xl px-4' href={"/orders"}>See Orders</Link>
       </div>
          <p className="text-gray-600">Complete your order</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="lg:order-2">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((product) => (
                  <div key={product.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                      <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)} each</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information Form */}
          <div className="lg:order-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Customer Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                   
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-base"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full mt-8 bg-black text-white py-4 px-6 rounded-md font-semibold text-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Place Order - ${total.toFixed(2)}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By placing this order, you agree to our Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import useAllorders from '@/app/Hooks/useAllOrder';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const OrderManagement = () => {
const { orders: fetchedOrders } = useAllorders(); // ✅ Destructure correctly
const [orders, setOrders] = useState([]);

useEffect(() => {
  if (Array.isArray(fetchedOrders)) {
    setOrders(fetchedOrders);
  }
}, [fetchedOrders]);


  const handleDelete = (id) => {
    setOrders(orders.filter(order => order._id !== id));
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure delete the order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const handaleconfirm = e => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure order confirm!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-0">
            Order Management
          </h1>
          <Link href={"/dashboard/admin/addproduct"}>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-red-500 w-full sm:w-auto">
              Add Order
            </button>
          </Link>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-black px-4 py-3 text-left whitespace-nowrap">Order ID</th>
                <th className="text-black px-4 py-3 text-left whitespace-nowrap">Customer</th>
                <th className="text-black px-4 py-3 text-left whitespace-nowrap">Products</th>
                <th className="text-black px-4 py-3 text-left whitespace-nowrap">Amount</th>
                <th className="text-black px-4 py-3 text-left whitespace-nowrap">Status</th>
                <th className="text-black px-4 py-3 text-left whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="text-black px-4 py-4">#{index + 1}</td>
                  <td className="text-black px-4 py-4">
                    {order.customer?.name} <br />
                    <span className="text-xs text-gray-500">{order.customer?.email}</span>
                  </td>
                  <td className="text-black px-4 py-4">
                    {order.items?.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2 mb-1">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-8 h-8 object-cover rounded"
                        />
                        <span className="text-xs">{item.name} x {item.quantity}</span>
                      </div>
                    ))}
                  </td>
                  <td className="text-black px-4 py-4 whitespace-nowrap">৳ {order.total}</td>
                  <td className="text-black px-4 py-4 capitalize whitespace-nowrap">
                    <button className="px-2 py-1 rounded text-xs bg-red-200">
                      {order.status}
                    </button>
                  </td>
                  <td className="text-black px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-white border px-3 py-1 rounded text-xs hover:bg-gray-200">
                        View
                      </button>
                      <button className="bg-white border px-3 py-1 rounded text-xs hover:bg-gray-200">
                        Edit
                      </button>
                      <button onClick={handaleconfirm} className="bg-white border px-3 py-1 rounded text-xs hover:bg-gray-200">
                        confirm order
                      </button>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Tablet and Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {orders.map((order, index) => (
            <div key={order._id} className="border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="font-medium text-black">Order #{index + 1}</h3>
                  <p className="text-sm text-black">{order.customer?.name}</p>
                  <p className="text-xs text-gray-500">{order.customer?.email}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <p className="font-medium text-black">৳ {order.total}</p>
                  <button className="px-2 py-1 rounded text-xs bg-red-200 capitalize">
                    {order.status}
                  </button>
                </div>
              </div>

              {/* Products */}
              <div className="mb-4">
                <p className="text-sm font-medium text-black mb-2">Products:</p>
                <div className="space-y-2">
                  {order.items?.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-8 h-8 object-cover rounded"
                      />
                      <span className="text-xs text-black">{item.name} x {item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button className="bg-white border px-3 py-2 rounded text-xs hover:bg-gray-200 text-center">
                  View
                </button>
                <button className="bg-white border px-3 py-2 rounded text-xs hover:bg-gray-200 text-center">
                  Edit
                </button>
                <button 
                  onClick={handaleconfirm} 
                  className="bg-white border px-3 py-2 rounded text-xs hover:bg-gray-200 text-center col-span-2 sm:col-span-1"
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-red-600 text-white px-3 py-2 rounded text-xs hover:bg-red-700 text-center col-span-2 sm:col-span-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {orders.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No orders found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
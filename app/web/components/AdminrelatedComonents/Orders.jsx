"use client";

import useAllorders from '@/app/Hooks/useAllOrder';
import React, { useState, useEffect } from 'react';

const OrderManagement = () => {
  const { orders: fetchedOrders } = useAllorders();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(fetchedOrders);
  }, [fetchedOrders]);

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order._id !== id));
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black mb-4">Order Management</h1>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-red-500">
            Add Order
          </button>
        </div>

        {/* Orders Table */}
        <div className="rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-black px-6 py-3 text-left">Order ID</th>
                <th className="text-black px-6 py-3 text-left">Customer</th>
                <th className="text-black px-6 py-3 text-left">Products</th>
                <th className="text-black px-6 py-3 text-left">Amount</th>
                <th className="text-black px-6 py-3 text-left">Status</th>
                <th className="text-black px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="border-b border-gray-700 hover:bg-gray-100">
                  <td className="text-black px-6 py-4">#{index + 1}</td>
                  <td className="text-black px-6 py-4">
                    {order.customer?.name} <br />
                    <span className="text-sm text-gray-500">{order.customer?.email}</span>
                  </td>
                  <td className="text-black px-6 py-4">
                    {order.items?.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <span>{item.name} x {item.quantity}</span>
                      </div>
                    ))}
                  </td>
                  <td className="text-black px-6 py-4">৳ {order.total}</td>
                  <td className="text-black px-6 py-4 capitalize">
                    <span className="px-2 py-1 rounded text-sm bg-gray-200">
                      {order.status}
                    </span>
                  </td>
                  <td className="text-black px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="bg-white border px-3 py-1 rounded text-sm hover:bg-gray-200">
                        View
                      </button>
                      <button className="bg-white border px-3 py-1 rounded text-sm hover:bg-gray-200">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
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
      </div>
    </div>
  );
};

export default OrderManagement;

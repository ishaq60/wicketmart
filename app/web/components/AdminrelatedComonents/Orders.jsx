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
const handaleconfirm=e=>{
  
}
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-0">
            Order Management
          </h1>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-red-500">
            Add Order
          </button>
        </div>

        {/* Orders Table */}
        <div className="rounded-lg overflow-x-auto">
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
                    <button  className="px-2 py-1 rounded text-xs bg-red-200">
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
      </div>
    </div>
  );
};

export default OrderManagement;

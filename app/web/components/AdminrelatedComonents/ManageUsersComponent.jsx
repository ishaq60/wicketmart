"use client"
import useAllusers from '@/app/Hooks/useAlluser';
import React, { useState } from 'react';

const ManageUsers = () => {
    const {users}=useAllusers()
 
console.log(users)
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen  p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">Manage Users</h1>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-red-200 text-sm sm:text-base">
            Add User
          </button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="text-black px-6 py-3 text-left">User ID</th>
                <th className="text-black px-6 py-3 text-left">Name</th>
                <th className="text-black px-6 py-3 text-left">Email</th>
                <th className="text-black px-6 py-3 text-left">Phone</th>
                <th className="text-black px-6 py-3 text-left">Status</th>
                <th className="text-black px-6 py-3 text-left">Role</th>
                <th className="text-black px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-red-500 hover:text-white">
                  <td className="text-black px-6 py-4">#{user.id}</td>
                  <td className="text-black px-6 py-4">{user.name}</td>
                  <td className="text-black px-6 py-4">{user.email}</td>
                  <td className="text-black px-6 py-4">{user.phone}</td>
                  <td className="text-black px-6 py-4">
                    <span className={`px-2 py-1 rounded text-sm `}>
                      {user.status}
                    </span>
                  </td>
                  <td className="text-black px-6 py-4">{user.role}</td>
                  <td className="text-black px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="bg-white text-black px-3 py-1 rounded text-sm hover:bg-red-200">
                        View
                      </button>
                      <button className="bg-white text-black px-3 py-1 rounded text-sm hover:bg-red-200">
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-600 text-black px-3 py-1 rounded text-sm hover:bg-red-700 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          <div className="grid gap-4">
            {users.map((user) => (
              <div key={user._id} className=" rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className=" text-sm">Name</p>
                    <p className="text-black font-medium">{user.name}</p>
                  </div>
                  <div>
                    <p className=" text-sm">ID</p>
                    <p className="text-black">#{user.id}</p>
                  </div>
                  <div>
                    <p className=" text-sm">Email</p>
                    <p className="text-black text-sm">{user.email}</p>
                  </div>
                  <div>
                    <p className=" text-sm">Phone</p>
                    <p className="text-black text-sm">{user.phone}</p>
                  </div>
                  <div>
                    <p className=" text-sm">Status</p>
                    {user.status}
                  </div>
                  <div>
                    <p className="text-sm">Role</p>
                    <p className="text-black">{user.status}</p>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-700">
                  <button className="bg-white text-black px-3 py-1 rounded text-sm hover:bg-red-200">
                    View
                  </button>
                  <button className="bg-white text-black px-3 py-1 rounded text-sm hover:bg-red-200">
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-600 text-black px-3 py-1 rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user._id} className=" rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-black font-medium text-lg">{user.name}</h3>
                    <p className="text-black text-sm">ID: #{user.id}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.status === 'Active' ? 'bg-green-700 text-green-200' :
                    user.status === 'Inactive' ? 'bg-gray-700 text-gray-200' :
                    'bg-red-700 text-black'
                  }`}>
                    {user?.status}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-black text-xs">Email</p>
                    <p className="text-black text-sm">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-black text-xs">Phone</p>
                    <p className="text-black text-sm">{user.phone}</p>
                  </div>
                  <div>
                    <p className="text-black text-xs">Role</p>
                    <p className="text-black text-sm">{user.role}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-white text-black py-2 rounded text-sm hover:bg-red-200">
                    View
                  </button>
                  <button className="flex-1 bg-white text-black py-2 rounded text-sm hover:bg-red-200">
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(user.id)}
                    className="flex-1  text-black py-2 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
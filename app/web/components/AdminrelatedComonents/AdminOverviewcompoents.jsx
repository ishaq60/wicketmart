"use client";
import React from "react";
import {
  Users,
  ShoppingCart,
  DollarSign,
  CheckCircle,
  TrendingUp,
  Calendar,
} from "lucide-react";
import useAllorders from "@/app/Hooks/useAllOrder";
import useAllusers from "@/app/Hooks/useAlluser";
import Link from "next/link";

const AdminOverviewcompoents = () => {
  const { orders } = useAllorders();
  console.log(orders);
  const { users } = useAllusers();
  // Sample data for the dashboard
  const stats = {
    totalUsers: users?.length,
    totalOrders: 10,
    totalRevenue: 124750,
    completedOrders: 7,
  };

  const monthlyData = [
    { month: "Jan", revenue: 8500, orders: 45 },
    { month: "Feb", revenue: 12300, orders: 67 },
    { month: "Mar", revenue: 1560, orders: 89 },
    { month: "Apr", revenue: 1890, orders: 112 },
    { month: "May", revenue: 22400, orders: 134 },
    { month: "Jun", revenue: 28000, orders: 98 },
  ];

  const StatCard = ({ title, value, icon: Icon, color, change }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-black">{title}</p>
          <p className="text-2xl font-bold text-black mt-2">{value}</p>
          {change && (
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {change}% from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const SimpleBarChart = () => (
    <div className="flex items-end justify-between h-48 px-4">
      {monthlyData.map((data, index) => (
        <div key={data.month} className="flex flex-col items-center">
          <div
            className="bg-blue-500 rounded-t w-8 mb-2"
            style={{ height: `${(data.revenue / 25000) * 160}px` }}
          ></div>
          <span className="text-xs text-black">{data.month}</span>
        </div>
      ))}
    </div>
  );

  const SimpleLineChart = () => (
    <div className="relative h-48 p-4">
      <svg className="w-full h-full" viewBox="0 0 300 160">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            y1={i * 40}
            x2="300"
            y2={i * 40}
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        ))}

        {/* Line path */}
        <polyline
          fill="none"
          stroke="#10B981"
          strokeWidth="3"
          points="0,120 50,100 100,80 150,60 200,40 250,50"
        />

        {/* Area fill */}
        <polygon
          fill="url(#gradient)"
          points="0,120 50,100 100,80 150,60 200,40 250,50 250,160 0,160"
        />

        {/* Data points */}
        {[0, 50, 100, 150, 200, 250].map((x, i) => {
          const y = [120, 100, 80, 60, 40, 50][i];
          return <circle key={i} cx={x} cy={y} r="4" fill="#10B981" />;
        })}
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Admin Overview</h1>
          <p className="text-black">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value={stats.totalUsers.toLocaleString()}
            icon={Users}
            color="bg-blue-500"
            change={12}
          />
          <StatCard
            title="Total Orders"
            value={stats.totalOrders.toLocaleString()}
            icon={ShoppingCart}
            color="bg-purple-500"
            change={8}
          />
          <StatCard
            title="Total Revenue"
            value={`৳${stats.totalRevenue.toLocaleString()}`}
            icon={DollarSign}
            color="bg-green-500"
            change={15}
          />
          <StatCard
            title="Completed Orders"
            value={stats.completedOrders.toLocaleString()}
            icon={CheckCircle}
            color="bg-orange-500"
            change={5}
          />
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-black">
                Monthly Revenue
              </h3>
              <div className="flex items-center text-sm text-black">
                <Calendar className="w-4 h-4 mr-1" />
                Last 6 months
              </div>
            </div>
            <SimpleBarChart />
          </div>

          {/* Orders Trend */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-black">Orders Trend</h3>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +15% this month
              </div>
            </div>
            <SimpleLineChart />
          </div>
        </div>

        {/* Recent Orders & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-4">
              Recent Orders
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-sm font-medium text-black">
                      Order ID
                    </th>
                    <th className="text-left py-2 text-sm font-medium text-black">
                      Customer
                    </th>
                    <th className="text-left py-2 text-sm font-medium text-black">
                      Amount
                    </th>
                    <th className="text-left py-2 text-sm font-medium text-black">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 text-sm font-medium text-black">
                        {index}
                      </td>

                      {/* Fix name to order.customer.name */}
                      <td className="py-3 text-sm text-gray-700">
                        {order.customer?.name}
                      </td>

                      {/* Fix price to order.items[0]?.price */}
                      <td className="py-3 text-sm text-black">
                        ৳{order.items?.[0]?.price}
                      </td>

                      <td className="py-3">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Processing"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "Shipped"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions & Summary */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link href={"/products"}>
                <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 text-sm">
                  Add New Product
                </button>
                </Link>
                <Link href="/dashboard/admin/orders">
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 text-sm">
                    Manage Orders
                  </button>
                </Link>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 text-sm">
                  View Reports
                </button>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-black mb-4">
                Performance
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-black">Order Completion</span>
                    <span className="text-black">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-black">Customer Satisfaction</span>
                    <span className="text-black">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-black">Revenue Target</span>
                    <span className="text-black">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewcompoents;

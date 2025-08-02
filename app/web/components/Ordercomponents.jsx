"use client";
import React, { useState } from "react";
import {
  CreditCard,
  Smartphone,
  MapPin,
  Clock,
  CheckCircle,
  Package,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { useSession } from "next-auth/react";
import useOrderdata from "@/app/Hooks/useOrderdata";
import Loadingred from "./loadingred";

export default function Ordercomponents() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const { data: session } = useSession();
  const { orders, isLoading } = useOrderdata(session?.user?.email);

  // ✅ Get the first order safely
  const [firstOrder] = orders || [];
  const {
    _id: orderId,
    customer,
    items,
    status,
    createdAt,
  } = firstOrder || {};

  // ✅ If loading or no order found
  if (isLoading) return <Loadingred/>
  if (!firstOrder) return <p className="p-4">No orders found.</p>;

  // ✅ Use customer info from DB
  const customerInfo = {
    name: customer?.name || "",
    email: customer?.email || "",
    phone: customer?.phone || "N/A",
    address: customer?.address || "N/A",
  };

  // ✅ Order summary calculations
  const subtotal =
    items?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const deliveryFee = 50;

  const paymentMethods = [
    {
      id: "stripe",
      name: "Credit/Debit Card",
      description: "Pay with Visa, Mastercard, or American Express",
      icon: CreditCard,
      type: "international",
      fees: "2.9% + ৳3",
    },
    {
      id: "bkash",
      name: "bKash",
      description: "Pay with bKash Mobile Banking",
      icon: Smartphone,
      type: "bangladeshi",
      fees: "1.85%",
    },
    {
      id: "nagad",
      name: "Nagad",
      description: "Pay with Nagad Digital Payment",
      icon: Smartphone,
      type: "bangladeshi",
      fees: "1.99%",
    },
    {
      id: "rocket",
      name: "Rocket",
      description: "Pay with Dutch-Bangla Rocket",
      icon: Smartphone,
      type: "bangladeshi",
      fees: "1.50%",
    },
    {
      id: "ssl",
      name: "SSL Commerz",
      description: "Pay with local/international cards",
      icon: CreditCard,
      type: "bangladeshi",
      fees: "2.75%",
    },
  ];

  const selectedMethod = paymentMethods.find(
    (method) => method.id === selectedPayment
  );
  const processingFee = selectedMethod
    ? selectedMethod.id === "stripe"
      ? subtotal * 0.029 + 3
      : subtotal * (parseFloat(selectedMethod.fees) / 100)
    : 0;

  const total = subtotal + deliveryFee + processingFee;

  const handlePayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }

    const paymentData = {
      orderId,
      paymentMethod: selectedPayment,
      amount: total,
      customer: customerInfo,
      items,
    };

    console.log("Processing payment:", paymentData);
    alert(`Processing payment via ${selectedMethod.name}...`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Details
          </h1>
          <p className="text-gray-600">
            Review your order and complete payment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Order #{orderId}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    status
                  )}`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Clock className="mr-2 h-4 w-4" />
                Ordered on{" "}
                {new Date(createdAt).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <div className="space-y-4">
               {orders?.length > 0 ? (
  orders.map(order => (
    <div key={order._id} className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <h2 className="text-xl font-bold mb-2">Order #{order._id}</h2>
      <p className="text-sm text-gray-600 mb-4">Status: {order.status}</p>
      <p className="text-sm text-gray-600 mb-4">Created At: {new Date(order.createdAt).toLocaleString()}</p>

      <div className="space-y-4">
        {order.items.map(item => (
          <div key={item.id} className="flex items-center space-x-4 border p-4 rounded-md">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md"/>
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ৳{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))
) : (
  <p>No orders found.</p>
)}

              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Customer Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <User className="mr-3 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{customerInfo.name}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{customerInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{customerInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{customerInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Payment Methods
              </h2>

              {/* International Payment */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  International Payment
                </h3>
                <div className="space-y-3">
                  {paymentMethods
                    .filter((method) => method.type === "international")
                    .map((method) => {
                      const Icon = method.icon;
                      return (
                        <label
                          key={method.id}
                          className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selectedPayment === method.id}
                            onChange={(e) => setSelectedPayment(e.target.value)}
                            className="mr-4"
                          />
                          <Icon className="mr-3 h-6 w-6 text-gray-600" />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">
                              {method.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {method.description}
                            </p>
                            <p className="text-xs text-gray-400">
                              Processing fee: {method.fees}
                            </p>
                          </div>
                        </label>
                      );
                    })}
                </div>
              </div>

              {/* Bangladeshi Payment */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Bangladeshi Payment Methods
                </h3>
                <div className="space-y-3">
                  {paymentMethods
                    .filter((method) => method.type === "bangladeshi")
                    .map((method) => {
                      const Icon = method.icon;
                      return (
                        <label
                          key={method.id}
                          className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selectedPayment === method.id}
                            onChange={(e) => setSelectedPayment(e.target.value)}
                            className="mr-4"
                          />
                          <Icon className="mr-3 h-6 w-6 text-gray-600" />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">
                              {method.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {method.description}
                            </p>
                            <p className="text-xs text-gray-400">
                              Processing fee: {method.fees}
                            </p>
                          </div>
                          {(method.id === "bkash" || method.id === "nagad") && (
                            <div className="text-right">
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Popular
                              </span>
                            </div>
                          )}
                        </label>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              <p className="text-red-500">
                Note:{" "}
                <span className="text-black underline">
                  payment is optional, you can pay cash on delivery
                </span>
              </p>
              <h2 className="text-xl mt-1 font-semibold mb-5">
                Payment Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>৳{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span>৳{deliveryFee.toFixed(2)}</span>
                </div>
                {selectedMethod && (
                  <div className="flex justify-between text-sm">
                    <span>Processing Fee ({selectedMethod.name})</span>
                    <span>৳{processingFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>৳{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={!selectedPayment}
                className={`w-full py-4 px-6 rounded-md font-semibold text-lg transition-colors ${
                  selectedPayment
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {selectedPayment
                  ? `Pay with ${selectedMethod?.name}`
                  : "Select Payment Method"}
              </button>

              <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                <CheckCircle className="mr-2 h-4 w-4" />
                Secure Payment Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

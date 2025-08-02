"use client";
import React, { memo, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Payment = memo(({ selectedMethod, subtotal, deliveryFee, processingFee, total, handlePayment, selectedPayment }) => {
  return (
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
  );
});

export default Payment;

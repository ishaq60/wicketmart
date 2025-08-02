"use client";

import useAllProducts from '@/app/Hooks/useAllProducts';
import Link from 'next/link';
import React from 'react';

const AllProduct = () => {
  const { products } = useAllProducts();
  console.log(products);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition"
            >
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <h2 className="text-lg font-bold mb-1">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

              <div className="flex items-center mb-2">
                <span className="text-yellow-500 font-semibold">
                  ⭐ {product.averageRating ?? 0} / 5
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  ({product.totalReviews} reviews)
                </span>
              </div>

              <p className="text-lg font-bold text-green-600 mb-1">
                ৳ {product.price}
              </p>

              {product.discount > 0 && (
                <p className="text-sm text-gray-500 line-through">
                  ৳ {product.originalPrice}
                </p>
              )}

              <p className="text-sm text-gray-600 mt-2">
                {product.description.slice(0, 80)}...
              </p>

              <div className="mt-4 flex gap-2">
                <Link className='w-full'  href={`/sProduct/${product._id}`}>
                <button className="w-full bg-black text-white py-2 rounded hover:bg-red-500">
                  View Details
                </button>
                </Link>
                
                <button className="w-full bg-red-500  text-white py-2 rounded hover:bg-red-500">
              Update
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProduct;

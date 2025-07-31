"use client"
import React from 'react';
import ProductDetails from './productDetails';
import UsersRating from './Usersrating';
import { useParams } from 'next/navigation';
import Useproduct from '@/app/Hooks/Useproduct';

import Loadingred from '../loadingred';


const ProductHome = () => {
  const { id } = useParams();
  const { product, isLoading, error } = Useproduct(id);
  console.log(product)

  if (isLoading) return <div className="w-full py-16 flex justify-center items-center">

    <Loadingred></Loadingred>
  </div>;
  if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;
  return (
    <div className=' mb-50'>
      <ProductDetails product={product} ></ProductDetails>
      <UsersRating product={product}></UsersRating>
    </div>
  );
};

export default ProductHome;
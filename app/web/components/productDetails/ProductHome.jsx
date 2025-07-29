import React from 'react';
import ProductDetails from './productDetails';
import UsersRating from './Usersrating';


const ProductHome = () => {
  return (
    <div className=' mb-50'>
      <ProductDetails></ProductDetails>
      <UsersRating></UsersRating>
    </div>
  );
};

export default ProductHome;
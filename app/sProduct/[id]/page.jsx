

import ProductHome from '@/app/web/components/productDetails/ProductHome';

import React from 'react';
export const metadata={
    title:"productDetails",
    description:"tThis is post details page"
}
const page = () => {

   
    return (
        <div className='min-h-screen'>
         <ProductHome></ProductHome>
        </div>
    );
};

export default page;
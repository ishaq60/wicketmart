

import React from 'react';
import ContactUsPage from '../web/components/ContactUsPage';
export const metadata={
    title:"contact",
    description:"contact page"
}
const page = () => {
    return (
        <div className='min-h-screen'>
        <ContactUsPage></ContactUsPage>
        </div>
    );
};

export default page;
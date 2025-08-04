
import React from 'react';
import WicketMartAbout from '../web/components/WicketMartAbout';


export const metadata={
    title:"About",
    description:"About page"
}

const page = () => {
    return (
        <div className='min-h-screen'>
        <WicketMartAbout></WicketMartAbout>
        </div>
    );
};

export default page;
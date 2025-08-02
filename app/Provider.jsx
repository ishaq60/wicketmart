'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { store } from './web/components/store/store';
import { Provider as ReduxProvider } from 'react-redux'; 
import Navbar from './web/components/Navbar';
import Footer from './web/components/Footer';
import { ToastContainer } from 'react-toastify';
import { SessionProvider,session } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Topheader from './web/components/Topheader';

export default function AppProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();

  const hideLayout =

    pathname.startsWith("/dashboard") 

  return (
    <ReduxProvider store={store}>
        <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>

      {!hideLayout &&   <Topheader />}
      {!hideLayout && <Navbar />}
        {children}
           <ToastContainer  position="top-center" autoClose={3000} />
      </QueryClientProvider>
      <Footer></Footer>
      </SessionProvider>
    </ReduxProvider>
  );
}

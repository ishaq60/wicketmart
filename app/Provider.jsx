'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { store } from './web/components/store/store';
import { Provider as ReduxProvider } from 'react-redux'; 
import Navbar from './web/components/Navbar';
import Footer from './web/components/Footer';
import { ToastContainer } from 'react-toastify';
import { SessionProvider,session } from 'next-auth/react';

export default function AppProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ReduxProvider store={store}>
        <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
      
        <Navbar></Navbar>
        {children}
           <ToastContainer />
      </QueryClientProvider>
      <Footer></Footer>
      </SessionProvider>
    </ReduxProvider>
  );
}

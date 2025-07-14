'use client';

import { useCartStore } from '@/lib/store';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  // const cartCount = useCartStore((state) =>
  //   state.cart.reduce((sum, item) => sum + item.quantity, 0)
  // );

  return (
    <>
     <Toaster position="top-right" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

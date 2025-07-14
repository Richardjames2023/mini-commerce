'use client';

import { useCartStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!name || !email || !address) {
      toast.error('Please fill out all fields.');
      return;
    }
  
    // Generate fake order
    const orderId = 'MC' + Math.floor(100000 + Math.random() * 900000);
    const date = new Date().toISOString();
    const order = {
      id: orderId,
      date,
      name,
      email,
      address,
      items: cart,
      total,
    };
  
    // Save order to localStorage
    const existing = JSON.parse(localStorage.getItem('mini-commerce-orders') || '[]');
    localStorage.setItem('mini-commerce-orders', JSON.stringify([order, ...existing]));
  
    // Store name for confirmation page
    localStorage.setItem('checkoutName', name);
  
    toast.success('✅ Order placed successfully!');
    clearCart();
  
    setTimeout(() => {
      router.push('/success');
    }, 1500);
  };
  

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty.{' '}
          <Link href="/" className="text-blue-600 underline">
            Go back to shopping
          </Link>
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shipping Info */}
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block font-medium">Shipping Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  rows={3}
                  placeholder="123 Fake Street, Lagos, Nigeria"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-3">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <span className="font-semibold">Total:</span>
              <span className="text-lg font-bold">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Complete Checkout (Mock)
          </button>
        </form>
      )}
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  const [order, setOrder] = useState<any | null>(null);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('mini-commerce-orders') || '[]');
    const latestOrder = orders[0] || null;
    setOrder(latestOrder);
  }, []);

  if (!order) {
    return (
      <main className="p-6 max-w-xl mx-auto text-center">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">No recent order found</h1>
        <Link href="/" className="text-blue-600 underline">
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-2xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-2 text-[#ffc029]">Order Confirmed</h1>
      <p className="mb-4">Thank you, <strong>{order.name}</strong>! Here’s your receipt:</p>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 border">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="font-mono text-md">{order.id}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Date</p>
            <p>{new Date(order.date).toLocaleDateString()}</p>
          </div>
        </div>

        <hr />

        <div>
          <h2 className="text-lg font-semibold mb-2">Items</h2>
          <ul className="space-y-2">
            {order.items.map((item: any) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </div>

      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </main>
  );
}

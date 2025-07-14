'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Lazy-load modal
const OrderModal = dynamic(() => import('@/components/OrderModal'), { ssr: false });

type Order = {
  id: string;
  date: string;
  name: string;
  email: string;
  address: string;
  total: number;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [query, setQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('mini-commerce-orders') || '[]');
    setOrders(stored);
  }, []);

  const clearOrders = () => {
    localStorage.removeItem('mini-commerce-orders');
    setOrders([]);
  };

  const openModal = (order: Order) => {
    setSelectedOrder(order);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsOpen(false);
  };

  const filteredOrders = orders
    .filter((order) => {
      const q = query.toLowerCase();
      const productMatch = order.items.some((item) =>
        item.name.toLowerCase().includes(q)
      );
      const nameOrEmailMatch =
        order.name.toLowerCase().includes(q) ||
        order.email.toLowerCase().includes(q);
      return nameOrEmailMatch || productMatch;
    })
    .filter((order) => {
      if (!startDate && !endDate) return true;
      const orderDate = new Date(order.date).getTime();
      const start = startDate ? new Date(startDate).getTime() : -Infinity;
      const end = endDate ? new Date(endDate).getTime() : Infinity;
      return orderDate >= start && orderDate <= end;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧾 My Orders</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, email or product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={clearOrders}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear All
        </button>
      </div>

      {/* Orders */}
      {filteredOrders.length === 0 ? (
        <p className="text-gray-600">
          No orders found.{' '}
          <Link href="/" className="text-blue-600 underline">Go shopping</Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {filteredOrders.map((order) => (
            <li key={order.id} className="bg-white border rounded-xl shadow p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Order ID:</p>
                  <p className="font-mono">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Date:</p>
                  <p>{new Date(order.date).toLocaleDateString()}</p>
                </div>
              </div>
              <button
                onClick={() => openModal(order)}
                className="mt-4 px-4 py-2 bg-[#febd27] text-white rounded hover:bg-blue-700 text-sm"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      <OrderModal isOpen={isOpen} onClose={closeModal} order={selectedOrder} />
    </main>
  );
}

'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 bg-blue-50 text-gray-700 py-8 border-t">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Text */}
        <p className="text-sm text-center md:text-left text-blue-700">
          © {new Date().getFullYear()} Mini-Commerce. Built with ❤️
        </p>

        {/* Right: Links */}
        <div className="flex gap-4 text-sm text-blue-700">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/cart" className="hover:underline">Cart</Link>
          <Link href="/orders" className="hover:underline">Orders</Link>
        </div>
      </div>
    </footer>
  );
}

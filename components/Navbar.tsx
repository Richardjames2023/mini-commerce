"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const cartCount = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-3">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[#ffc029]">
          🛒 Mini-<span className="text-blue-700">Commerce</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-md font-medium">
          <Link href="/" className="hover:text-[#ffc029] transition">
            Home
          </Link>
          <Link href="/orders" className="hover:text-[#ffc029] transition">
            Orders
          </Link>
          <Link href="/cart" className="hover:text-[#ffc029] transition">
            Cart{" "}
            {cartCount > 0 && (
              <span className="ml-1 bg-blue-600 text-white rounded-full px-2 py-0.5 text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium bg-white border-t">
          <Link
            href="/"
            className="hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/orders"
            className="hover:text-[#ffc029]"
            onClick={() => setOpen(false)}
          >
            Orders
          </Link>
          <Link
            href="/cart"
            className="hover:text-[#ffc029]"
            onClick={() => setOpen(false)}
          >
            Cart{" "}
            {cartCount > 0 && (
              <span className="ml-1 bg-blue-600 text-white rounded-full px-2 py-0.5 text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      )}
    </header>
  );
}

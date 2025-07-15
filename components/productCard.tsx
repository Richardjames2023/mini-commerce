
"use client";

import React from "react";
import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { highlight } from "@/lib/utils/highLight";

type ProductCardProps = {
  product: Product;
  query?: string;
};

// Helper to generate slug from product name
function toSlug(name: string): string {
  return name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}

export default function ProductCard({ product, query }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const slug = toSlug(product.name); // Generate slug dynamically

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      duration: 3000,
      position: "top-right",
      icon: "🛍️",
    });
  };

  return (
    <div className="rounded-2xl shadow-md bg-white p-4 flex flex-col gap-3 hover:shadow-lg transition">
      {/* Wrap image and name in Link */}
      <Link href={`/product/${slug}`}>
        <div className="relative w-full h-48 bg-gray-100 rounded-xl overflow-hidden cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-lg font-semibold leading-snug mt-2 hover:underline">
          {query ? highlight(product.name, query) : product.name}
        </h2>
      </Link>

      <p className="text-sm text-gray-500">{product.description}</p>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-base font-bold text-blue-600">
          ${product.price}
        </span>
        <button
          onClick={handleAdd}
          className="px-3 py-1 text-sm bg-[#f6bd3d] text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}


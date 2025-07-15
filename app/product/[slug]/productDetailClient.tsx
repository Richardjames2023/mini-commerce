'use client';

import { Product } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import ProductCard from '@/components/productCard';
import Link from 'next/link';

type Props = {
  product: Product;
  related: Product[];
};

export default function ProductDetailClient({ product, related }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} × ${product.name} added to cart`);
  };

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600">${product.price}</p>

          <div className="flex items-center gap-3">
            <label htmlFor="qty" className="font-medium">Qty:</label>
            <input
              id="qty"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 border rounded px-3 py-1"
            />
          </div>

          <button
            onClick={handleAdd}
            className="bg-[#f6bd3d] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <Link href="/" className="block text-sm text-blue-600 underline mt-4">
            ← Back to home
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

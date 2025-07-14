'use client';

import ProductCard from '@/components/productCard';
import { useProductFilter } from '@/lib/hooks/useProductFilter';

export default function AllProductsPage() {
  const { filtered, query, setQuery, category, setCategory } = useProductFilter();
  const categories = ['All', 'Clothing', 'Electronics', 'Accessories'];

  return (
    <>
      <section className="sticky top-0 z-10 bg-white shadow p-4 flex flex-wrap justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search all products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded px-4 py-2 w-full sm:w-64"
        />

        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                category === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} query={query} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

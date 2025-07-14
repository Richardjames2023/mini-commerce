"use client";

import Hero from "@/components/Hero";
import ProductCard from "@/components/productCard";
import { useProductFilter } from "@/lib/hooks/useProductFilter";
import { products } from "@/lib/products";

export default function HomePage() {
  const { filtered, query, setQuery, category, setCategory } =
    useProductFilter();
  const categories = ["All", "Clothing", "Electronics", "Accessories"];

  // Get 4 most recent products (can be sorted based on ID, date, etc.)
  const featured = [...products].slice(0, 4);

  return (
    <>
      <Hero />
      {/* Featured Products */}
      <section className="p-6 max-w-7xl mx-auto m-5">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Featured Products
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-10 bg-white shadow-sm p-4 flex flex-wrap justify-center items-center gap-4 bg-[#f6bd3d]">
        <input
          type="text"
          placeholder="Search products..."
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
                category === cat ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Filtered Product Grid */}
      <main className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Explore Our Products
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} query={query} />
          ))}
        </div>
      </main>
    </>
  );
}

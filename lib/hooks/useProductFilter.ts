import { useState } from 'react';
import { products } from '../products';
import type { Product } from '../products';

export function useProductFilter() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return {
    filtered,
    query,
    setQuery,
    category,
    setCategory,
  };
}

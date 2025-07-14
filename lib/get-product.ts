import { products } from './products';

// Simulate async fetching (e.g., DB or API)
export async function getProductBySlug(slug: string) {
  const product = products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  // Simulate latency
  await new Promise((r) => setTimeout(r, 300));

  return product || null;
}

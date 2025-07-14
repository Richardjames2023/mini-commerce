import { getProductBySlug } from '@/lib/get-product';
import ProductDetailClient from './productDetailClient';
import type { Metadata } from 'next';
import { products } from '@/lib/products';

type Props = {
  params: { slug: string };
};

// SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);

  if (!product) return <h1 className="p-6 text-xl">Product not found</h1>;

  const related = products.filter((p) => p.category === product.category && p.id !== product.id);

  return <ProductDetailClient product={product} related={related} />;
}

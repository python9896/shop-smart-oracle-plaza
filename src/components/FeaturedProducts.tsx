
import React from 'react';
import { getFeaturedProducts } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return <ProductGrid products={featuredProducts} title="Featured Products" />;
};

export default FeaturedProducts;

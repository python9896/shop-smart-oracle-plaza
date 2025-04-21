
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{category} Products</h1>
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-gray-500">There are no products available in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

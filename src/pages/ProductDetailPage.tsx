
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw, ArrowLeft } from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(parseInt(id || '0'));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Products
      </Link>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Product Images */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  className="h-5 w-5"
                />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} ({Math.floor(product.rating * 10)} reviews)</span>
          </div>
          
          <p className="text-3xl font-bold text-blue-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <p className="font-medium mb-2">Availability: 
              <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                {product.stock > 0 ? " In Stock" : " Out of Stock"}
              </span>
            </p>
            <p className="font-medium">Category: <span className="text-gray-600">{product.category}</span></p>
          </div>
          
          <Separator className="my-6" />
          
          {/* Add to Cart Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                >
                  -
                </Button>
                <Input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 mx-2 text-center h-10"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                  disabled={quantity >= product.stock}
                  className="h-10 w-10"
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                className="flex-1"
                size="lg"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          {/* Product Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Truck className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm">1 Year Warranty</span>
            </div>
            <div className="flex items-center">
              <RotateCcw className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm">30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <div className="prose max-w-none">
            <p className="mb-4">{product.description}</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.</p>
            <p>Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.</p>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="mt-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-b pb-2">
                <span className="font-medium">Brand:</span> <span className="text-gray-600">Premium Brand</span>
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Model:</span> <span className="text-gray-600">X-{product.id}00</span>
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Weight:</span> <span className="text-gray-600">1.2 kg</span>
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Dimensions:</span> <span className="text-gray-600">30 x 20 x 10 cm</span>
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Color:</span> <span className="text-gray-600">Black</span>
              </div>
              <div className="border-b pb-2">
                <span className="font-medium">Material:</span> <span className="text-gray-600">Premium Materials</span>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="h-5 w-5" />
                  ))}
                </div>
                <span className="font-bold">Excellent Product</span>
              </div>
              <p className="mb-2">This product exceeded my expectations. The quality is outstanding and it works perfectly for my needs.</p>
              <p className="text-sm text-gray-500">By John D. on March 15, 2023</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="h-5 w-5" />
                  ))}
                  <Star fill="none" className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="font-bold">Great Value</span>
              </div>
              <p className="mb-2">Good quality for the price. Would recommend to others looking for a reliable option.</p>
              <p className="text-sm text-gray-500">By Sarah M. on February 3, 2023</p>
            </div>
            
            <Button variant="outline" className="w-full">Load More Reviews</Button>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;

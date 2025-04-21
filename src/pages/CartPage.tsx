
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import CartItemComponent from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, ArrowRight, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, clearCart, getTotalPrice } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col items-center max-w-md mx-auto">
          <ShoppingBag className="h-20 w-20 text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild>
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <ShoppingCart className="mr-2 h-6 w-6" />
        Your Shopping Cart
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Cart Items ({cartItems.length})</h2>
                <Button variant="ghost" size="sm" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div>
              {cartItems.map(item => (
                <CartItemComponent key={item.product.id} item={item} />
              ))}
            </div>
            
            <div className="p-6 border-t">
              <Link to="/products" className="text-blue-600 hover:underline flex items-center">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${(getTotalPrice() * 0.07).toFixed(2)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(getTotalPrice() + getTotalPrice() * 0.07).toFixed(2)}</span>
                </div>
              </div>
              
              <Button asChild className="w-full mt-6">
                <Link to="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>We accept:</p>
                <div className="flex space-x-2 mt-2">
                  <div className="bg-gray-200 rounded p-1">Visa</div>
                  <div className="bg-gray-200 rounded p-1">Mastercard</div>
                  <div className="bg-gray-200 rounded p-1">PayPal</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

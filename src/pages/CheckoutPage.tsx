
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Truck, Home, CheckCircle } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  if (cartItems.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }
  
  const handlePlaceOrder = () => {
    // In a real app, this would connect to a backend API
    setOrderPlaced(true);
    clearCart();
  };
  
  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been received and will be processed shortly.
            A confirmation email has been sent to your email address.
          </p>
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="w-full lg:w-2/3">
          <Tabs defaultValue="delivery" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="delivery" className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Delivery
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2" />
                Payment
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex items-center">
                <Truck className="h-4 w-4 mr-2" />
                Shipping
              </TabsTrigger>
            </TabsList>
            
            {/* Delivery Tab */}
            <TabsContent value="delivery">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">Zip Code</Label>
                        <Input id="zip" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea id="notes" placeholder="Special instructions for delivery" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Payment Tab */}
            <TabsContent value="payment">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <RadioGroup defaultValue="card">
                        <div className="flex items-center space-x-2 mb-4">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card">Credit/Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank">Bank Transfer</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="name-on-card">Name on Card</Label>
                        <Input id="name-on-card" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Shipping Tab */}
            <TabsContent value="shipping">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <RadioGroup defaultValue="standard">
                      <div className="flex items-start space-x-2 mb-4">
                        <RadioGroupItem value="standard" id="standard" className="mt-1" />
                        <div>
                          <Label htmlFor="standard" className="font-medium">Standard Shipping</Label>
                          <p className="text-sm text-gray-500">Delivery in 3-5 business days</p>
                          <p className="text-sm font-medium">Free</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2 mb-4">
                        <RadioGroupItem value="express" id="express" className="mt-1" />
                        <div>
                          <Label htmlFor="express" className="font-medium">Express Shipping</Label>
                          <p className="text-sm text-gray-500">Delivery in 1-2 business days</p>
                          <p className="text-sm font-medium">$9.99</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="same-day" id="same-day" className="mt-1" />
                        <div>
                          <Label htmlFor="same-day" className="font-medium">Same Day Delivery</Label>
                          <p className="text-sm text-gray-500">Available in select areas</p>
                          <p className="text-sm font-medium">$19.99</p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
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
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(getTotalPrice() + getTotalPrice() * 0.07).toFixed(2)}</span>
              </div>
              
              <Button className="w-full mt-6" onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

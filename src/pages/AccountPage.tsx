
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { User, Package, CreditCard, LogOut } from 'lucide-react';

const AccountPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Mock order data
  const orders = [
    {
      id: 'ORD-1234',
      date: '2023-04-15',
      status: 'Delivered',
      total: 249.99
    },
    {
      id: 'ORD-5678',
      date: '2023-03-28',
      status: 'Processing',
      total: 129.95
    },
    {
      id: 'ORD-9012',
      date: '2023-02-10',
      status: 'Delivered',
      total: 79.99
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Account Login</h1>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm text-blue-600 hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
                    Sign In
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
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
                    <Label htmlFor="reg-email">Email</Label>
                    <Input id="reg-email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Password</Label>
                    <Input id="reg-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
                    Create Account
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Account</h1>
        <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Account Sidebar */}
        <div className="col-span-1">
          <Card>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="font-semibold">John Doe</h2>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              
              <Tabs defaultValue="profile" orientation="vertical" className="w-full">
                <TabsList className="flex flex-col w-full h-auto space-y-1">
                  <TabsTrigger value="profile" className="justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="orders" className="justify-start">
                    <Package className="h-4 w-4 mr-2" />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </Card>
        </div>
        
        {/* Account Content */}
        <div className="col-span-1 md:col-span-3">
          <Tabs defaultValue="profile">
            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="profile-firstname">First Name</Label>
                        <Input id="profile-firstname" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="profile-lastname">Last Name</Label>
                        <Input id="profile-lastname" defaultValue="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="profile-email">Email</Label>
                      <Input id="profile-email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="profile-phone">Phone</Label>
                      <Input id="profile-phone" defaultValue="(123) 456-7890" />
                    </div>
                    
                    <Separator />
                    
                    <h3 className="text-lg font-medium">Change Password</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                        <Input id="confirm-new-password" type="password" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order History</h2>
                  
                  {orders.length > 0 ? (
                    <div className="divide-y">
                      {orders.map(order => (
                        <div key={order.id} className="py-4">
                          <div className="flex flex-col md:flex-row justify-between mb-2">
                            <div>
                              <h3 className="font-medium">{order.id}</h3>
                              <p className="text-sm text-gray-500">Ordered on {order.date}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                order.status === 'Delivered' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <p className="font-medium">${order.total.toFixed(2)}</p>
                            <Button variant="outline" size="sm">View Order</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                      <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                      <Button asChild>
                        <a href="/products">Start Shopping</a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Payment Methods Tab */}
            <TabsContent value="payment">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 border flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-gray-500">Expires 12/25</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Remove</Button>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

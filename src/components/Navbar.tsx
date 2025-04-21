
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">ShopSmart</Link>
          
          {/* Search */}
          <div className="hidden md:flex items-center w-1/3 relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-6">
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden sm:flex">Categories</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link to="/products/category/Electronics" className="w-full">Electronics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products/category/Accessories" className="w-full">Accessories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/products/category/Furniture" className="w-full">Furniture</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Shop Link */}
            <Link to="/products" className="hidden sm:block text-gray-700 hover:text-blue-600">
              Shop
            </Link>
            
            {/* User Account */}
            <Link to="/account" className="text-gray-700 hover:text-blue-600">
              <User className="h-5 w-5" />
            </Link>
            
            {/* Cart with item count */}
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

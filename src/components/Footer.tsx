
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ShopSmart</h3>
            <p className="mb-4">
              Your one-stop shop for quality products at competitive prices. Shop smart, live better.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">Shop</Link>
              </li>
              <li>
                <Link to="/products/category/Electronics" className="hover:text-white">Electronics</Link>
              </li>
              <li>
                <Link to="/products/category/Accessories" className="hover:text-white">Accessories</Link>
              </li>
              <li>
                <Link to="/products/category/Furniture" className="hover:text-white">Furniture</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Shipping & Returns</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 ShopSmart. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@shopsmart.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Commerce St, Anytown, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

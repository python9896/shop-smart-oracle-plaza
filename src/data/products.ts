
import { Product } from '@/types';

// Mock product data for development
export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with these premium noise-cancelling wireless headphones. Perfect for music lovers and professionals alike.",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Electronics",
    stock: 15,
    rating: 4.5,
    featured: true
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Stay connected with this feature-packed smart watch. Track your fitness, receive notifications, and more.",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Electronics",
    stock: 10,
    rating: 4.2,
    featured: true
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    description: "Stylish and durable laptop bag made from genuine leather. Features multiple compartments for organization.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Accessories",
    stock: 20,
    rating: 4.7,
    featured: false
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    description: "Work comfortably with this ergonomic office chair designed to provide optimal support during long hours.",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Furniture",
    stock: 8,
    rating: 4.6,
    featured: false
  },
  {
    id: 5,
    name: "4K Ultra HD Smart TV",
    description: "Immerse yourself in stunning 4K resolution with this smart TV featuring vibrant colors and smart connectivity.",
    price: 799.99,
    imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Electronics",
    stock: 5,
    rating: 4.8,
    featured: true
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    description: "Keep your drinks hot or cold for hours with this durable stainless steel water bottle.",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Accessories",
    stock: 30,
    rating: 4.3,
    featured: false
  },
  {
    id: 7,
    name: "Professional DSLR Camera",
    description: "Capture stunning photos and videos with this professional-grade DSLR camera. Includes multiple lens options.",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Electronics",
    stock: 7,
    rating: 4.9,
    featured: true
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    description: "Take your music anywhere with this powerful portable Bluetooth speaker with 20 hours of battery life.",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    category: "Electronics",
    stock: 12,
    rating: 4.4,
    featured: false
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

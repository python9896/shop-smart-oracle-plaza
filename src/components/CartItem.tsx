
import React from 'react';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CartItemProps {
  item: CartItemType;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      updateQuantity(product.id, quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center py-4 border-b">
      <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full sm:w-24 h-24 object-cover rounded" 
        />
      </div>
      
      <div className="w-full sm:w-1/2 px-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <p className="text-blue-600 font-bold mt-1">${product.price.toFixed(2)}</p>
      </div>
      
      <div className="w-full sm:w-1/4 flex flex-col sm:items-end space-y-2">
        <div className="flex items-center">
          <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
            -
          </Button>
          <Input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 mx-2 text-center"
          />
          <Button variant="outline" size="icon" onClick={incrementQuantity} disabled={quantity >= product.stock}>
            +
          </Button>
        </div>
        
        <div className="flex items-center justify-between w-full sm:justify-end">
          <span className="mr-4 font-medium">${(product.price * quantity).toFixed(2)}</span>
          <Button variant="ghost" size="icon" onClick={() => removeFromCart(product.id)}>
            <Trash2 className="h-5 w-5 text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;

"use client";

import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    console.log('Updating quantity for item:', id, 'new quantity:', newQuantity);
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    console.log('Removing item from cart:', id);
    removeItem(id);
  };

  const handleClearCart = () => {
    console.log('Clearing entire cart');
    clearCart();
  };

  const handleCheckout = () => {
    console.log('Processing checkout with total:', cart.total);
    // Here you would typically integrate with payment processing
    alert('Chức năng thanh toán sẽ được tích hợp sau!');
  };

  console.log('CartSidebar rendered, isOpen:', isOpen, 'items count:', cart.items.length);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-food-orange-500" />
              <h2 className="text-xl font-semibold">Giỏ Hàng</h2>
              {cart.itemCount > 0 && (
                <Badge className="bg-food-orange-500">{cart.itemCount}</Badge>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Giỏ hàng trống</p>
                <p className="text-gray-400 text-sm mt-2">Thêm món ăn vào giỏ để bắt đầu đặt hàng!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-food-dark">{item.name}</h3>
                      <p className="text-food-orange-500 font-semibold">
                        {formatPrice(item.price)}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 text-red-500 hover:text-red-700 ml-2"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-food-dark">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {cart.items.length > 0 && (
                  <Button
                    variant="outline"
                    className="w-full mt-4 text-red-500 hover:text-red-700 border-red-200 hover:border-red-300"
                    onClick={handleClearCart}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Xóa tất cả
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Tổng cộng:</span>
                  <span className="text-2xl font-bold text-food-orange-500">
                    {formatPrice(cart.total)}
                  </span>
                </div>
                
                <Separator />
                
                <Button 
                  className="w-full bg-food-orange-500 hover:bg-food-orange-600 text-white text-lg py-6"
                  onClick={handleCheckout}
                >
                  Thanh Toán ({cart.itemCount} món)
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
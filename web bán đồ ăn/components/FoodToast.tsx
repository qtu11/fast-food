"use client";

import React, { useEffect } from 'react';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export const FoodToast: React.FC = () => {
  return <Toaster />;
};

export const useFoodToast = () => {
  const { toast } = useToast();

  const showAddToCartToast = (itemName: string) => {
    console.log('Showing add to cart toast for:', itemName);
    
    toast({
      title: "Đã thêm vào giỏ hàng!",
      description: `${itemName} đã được thêm vào giỏ hàng của bạn.`,
      duration: 3000,
      className: "border-food-green-500 bg-white",
      action: (
        <div className="flex items-center text-food-green-500">
          <CheckCircle className="w-5 h-5" />
        </div>
      ),
    });
  };

  const showCartUpdateToast = (message: string) => {
    console.log('Showing cart update toast:', message);
    
    toast({
      title: "Giỏ hàng đã cập nhật",
      description: message,
      duration: 2000,
      className: "border-food-orange-500 bg-white",
      action: (
        <div className="flex items-center text-food-orange-500">
          <ShoppingCart className="w-5 h-5" />
        </div>
      ),
    });
  };

  return {
    showAddToCartToast,
    showCartUpdateToast,
  };
};
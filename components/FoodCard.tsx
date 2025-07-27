"use client";

import React from 'react';
import { Star, Clock, Plus, Leaf, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FoodItem } from '@/types/food';
import { useCart } from '@/contexts/CartContext';
import { useFoodToast } from '@/components/FoodToast';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { addItem } = useCart();
  const { showAddToCartToast } = useFoodToast();

  const handleAddToCart = () => {
    console.log('Adding item to cart:', item.name);
    addItem(item);
    showAddToCartToast(item.name);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  console.log('Rendering FoodCard for:', item.name);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {item.isVegetarian && (
            <Badge className="bg-food-green-500 text-white">
              <Leaf className="w-3 h-3 mr-1" />
              Chay
            </Badge>
          )}
          {item.isSpicy && (
            <Badge className="bg-red-500 text-white">
              <Flame className="w-3 h-3 mr-1" />
              Cay
            </Badge>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          size="icon"
          className="absolute top-3 right-3 bg-white text-food-orange-500 hover:bg-food-orange-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-food-dark line-clamp-2">{item.name}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-food-yellow-500 text-food-yellow-500" />
            <span className="font-medium">{item.rating}</span>
            <span>({item.reviews})</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{item.preparationTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-food-orange-500">
            {formatPrice(item.price)}
          </span>
          
          <Button 
            onClick={handleAddToCart}
            className="bg-food-orange-500 hover:bg-food-orange-600 text-white"
          >
            Thêm vào giỏ
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
"use client";

import React from 'react';
import { Pizza, Sandwich, Soup, Salad, Cake, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FoodCategory } from '@/types/food';

interface FoodCategoriesProps {
  selectedCategory: FoodCategory | 'all';
  onCategoryChange: (category: FoodCategory | 'all') => void;
  categoryCounts: Record<FoodCategory | 'all', number>;
}

const categoryConfig = {
  all: { icon: null, label: 'Tất Cả', color: 'bg-gray-100 text-gray-700' },
  pizza: { icon: Pizza, label: 'Pizza', color: 'bg-red-100 text-red-700' },
  burger: { icon: Sandwich, label: 'Burger', color: 'bg-yellow-100 text-yellow-700' },
  asian: { icon: Soup, label: 'Món Á', color: 'bg-orange-100 text-orange-700' },
  healthy: { icon: Salad, label: 'Healthy', color: 'bg-green-100 text-green-700' },
  dessert: { icon: Cake, label: 'Tráng Miệng', color: 'bg-pink-100 text-pink-700' },
  drinks: { icon: Coffee, label: 'Đồ Uống', color: 'bg-blue-100 text-blue-700' },
};

const FoodCategories: React.FC<FoodCategoriesProps> = ({ 
  selectedCategory, 
  onCategoryChange, 
  categoryCounts 
}) => {
  
  const handleCategoryClick = (category: FoodCategory | 'all') => {
    console.log('Category selected:', category);
    onCategoryChange(category);
  };

  console.log('FoodCategories rendered, selected:', selectedCategory);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-food-dark mb-6">Danh Mục Món Ăn</h2>
      
      <div className="flex flex-wrap gap-3">
        {Object.entries(categoryConfig).map(([key, config]) => {
          const category = key as FoodCategory | 'all';
          const isSelected = selectedCategory === category;
          const count = categoryCounts[category] || 0;
          const IconComponent = config.icon;
          
          return (
            <Button
              key={category}
              variant={isSelected ? "default" : "outline"}
              onClick={() => handleCategoryClick(category)}
              className={`flex items-center gap-2 transition-all duration-200 ${
                isSelected 
                  ? 'bg-food-orange-500 hover:bg-food-orange-600 text-white' 
                  : 'hover:bg-food-orange-50 hover:border-food-orange-300'
              }`}
            >
              {IconComponent && <IconComponent className="w-4 h-4" />}
              <span>{config.label}</span>
              <Badge 
                variant="secondary" 
                className={`ml-1 ${
                  isSelected 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {count}
              </Badge>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCategories;
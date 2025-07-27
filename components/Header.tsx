"use client";

import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartToggle }) => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log('Header rendered with cart count:', cart.itemCount);

  const toggleMenu = () => {
    console.log('Toggling mobile menu');
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    console.log('Cart button clicked');
    onCartToggle();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-food-orange-500 to-food-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <h1 className="text-xl font-bold text-food-dark">FoodHaven</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-food-dark hover:text-food-orange-500 transition-colors font-medium">
              Trang Chủ
            </a>
            <a href="#menu" className="text-food-dark hover:text-food-orange-500 transition-colors font-medium">
              Thực Đơn
            </a>
            <a href="#about" className="text-food-dark hover:text-food-orange-500 transition-colors font-medium">
              Về Chúng Tôi
            </a>
            <a href="#contact" className="text-food-dark hover:text-food-orange-500 transition-colors font-medium">
              Liên Hệ
            </a>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cart.itemCount > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-food-orange-500 text-white text-xs flex items-center justify-center animate-bounce-gentle"
                >
                  {cart.itemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-food-dark hover:text-food-orange-500 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang Chủ
              </a>
              <a 
                href="#menu" 
                className="text-food-dark hover:text-food-orange-500 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Thực Đơn
              </a>
              <a 
                href="#about" 
                className="text-food-dark hover:text-food-orange-500 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Về Chúng Tôi
              </a>
              <a 
                href="#contact" 
                className="text-food-dark hover:text-food-orange-500 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên Hệ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
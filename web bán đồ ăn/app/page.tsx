"use client";

import React, { useState, useMemo } from 'react';
import { Star, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import FoodCard from '@/components/FoodCard';
import CartSidebar from '@/components/CartSidebar';
import FoodCategories from '@/components/FoodCategories';
import { FoodToast } from '@/components/FoodToast';
import { CartProvider } from '@/contexts/CartContext';
import { mockFoodItems } from '@/data/mockFood';
import { FoodCategory } from '@/types/food';

function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | 'all'>('all');

  console.log('HomePage rendered, selected category:', selectedCategory);

  // Filter food items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return mockFoodItems;
    }
    return mockFoodItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<FoodCategory | 'all', number> = {
      all: mockFoodItems.length,
      pizza: 0,
      burger: 0,
      asian: 0,
      healthy: 0,
      dessert: 0,
      drinks: 0
    };

    mockFoodItems.forEach(item => {
      counts[item.category]++;
    });

    return counts;
  }, []);

  const toggleCart = () => {
    console.log('Toggling cart sidebar');
    setIsCartOpen(!isCartOpen);
  };

  const handleCategoryChange = (category: FoodCategory | 'all') => {
    console.log('Category changed to:', category);
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-food-cream">
      <Header onCartToggle={toggleCart} />
      
      {/* Hero Section */}
      <section id="home" className="relative bg-food-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hương vị tuyệt vời
              <br />
              <span className="text-food-yellow-400">giao tận nơi</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Khám phá thế giới ẩm thực đa dạng với những món ăn tươi ngon, 
              được chế biến tỉ mỉ và giao hàng nhanh chóng đến tận nhà bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-food-orange-500 hover:bg-gray-100 font-semibold">
                Đặt Hàng Ngay
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Xem Thực Đơn
              </Button>
            </div>
          </div>
        </div>

        {/* Floating food icons */}
        <div className="absolute top-20 right-10 animate-bounce-gentle">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            🍕
          </div>
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            🍔
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-food-orange-500 mb-2">1000+</div>
              <div className="text-gray-600">Khách Hàng Hài Lòng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-food-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Món Ăn Đa Dạng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-food-orange-500 mb-2">4.8</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-food-yellow-500 text-food-yellow-500" />
                Đánh Giá
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-food-orange-500 mb-2">15</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <Clock className="w-4 h-4" />
                Phút Giao Hàng
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-4">
              Thực Đơn Đặc Biệt
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Từ những món ăn truyền thống đến hiện đại, chúng tôi mang đến cho bạn 
              những trải nghiệm ẩm thực tuyệt vời nhất.
            </p>
          </div>

          <FoodCategories
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            categoryCounts={categoryCounts}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Không có món ăn nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-food-dark mb-6">
                Về FoodHaven
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Chúng tôi tin rằng mỗi bữa ăn đều là một trải nghiệm đáng nhớ. 
                Với đội ngũ đầu bếp tài năng và nguyên liệu tươi ngon nhất, 
                FoodHaven cam kết mang đến cho bạn những món ăn chất lượng cao 
                với hương vị tuyệt vời.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-food-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Nguyên liệu tươi ngon, chọn lọc kỹ càng</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-food-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Đội ngũ đầu bếp chuyên nghiệp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-food-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Giao hàng nhanh chóng, đúng giờ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-food-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Dịch vụ khách hàng 24/7</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" 
                alt="Restaurant kitchen"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-food-orange-500">5+</div>
                <div className="text-gray-600">Năm Kinh Nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-food-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Liên Hệ</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-food-orange-500" />
                  <span>0123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-food-orange-500" />
                  <span>123 Đường ABC, Quận 1, TP.HCM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Giờ Hoạt Động</h3>
              <div className="space-y-2 text-gray-300">
                <div>Thứ 2 - Thứ 6: 8:00 - 22:00</div>
                <div>Thứ 7 - Chủ Nhật: 9:00 - 23:00</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Theo Dõi Chúng Tôi</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-gray-600 hover:border-food-orange-500">
                  F
                </Button>
                <Button variant="outline" size="icon" className="border-gray-600 hover:border-food-orange-500">
                  I
                </Button>
                <Button variant="outline" size="icon" className="border-gray-600 hover:border-food-orange-500">
                  T
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FoodHaven. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </section>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FoodToast />
    </div>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}

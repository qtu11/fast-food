import { FoodItem } from '@/types/food';

export const mockFoodItems: FoodItem[] = [
  // Pizza
  {
    id: '1',
    name: 'Pizza Margherita',
    description: 'Pizza truyền thống với phô mai mozzarella tươi, cà chua và lá húng quế',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=400&fit=crop',
    category: 'pizza',
    rating: 4.8,
    reviews: 156,
    preparationTime: '15-20 phút',
    isVegetarian: true,
  },
  {
    id: '2',
    name: 'Pizza Pepperoni',
    description: 'Pizza kinh điển với pepperoni, phô mai mozzarella và sốt cà chua đặc biệt',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop',
    category: 'pizza',
    rating: 4.7,
    reviews: 203,
    preparationTime: '15-20 phút',
  },
  {
    id: '3',
    name: 'Pizza Hải Sản',
    description: 'Pizza với tôm, mực, cua và phô mai mozzarella trên nền sốt kem',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&h=400&fit=crop',
    category: 'pizza',
    rating: 4.9,
    reviews: 89,
    preparationTime: '20-25 phút',
  },

  // Burger
  {
    id: '4',
    name: 'Burger Bò Angus',
    description: 'Burger với thịt bò Angus cao cấp, phô mai cheddar, rau xanh và sốt đặc biệt',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',
    category: 'burger',
    rating: 4.6,
    reviews: 324,
    preparationTime: '10-15 phút',
  },
  {
    id: '5',
    name: 'Burger Gà Giòn',
    description: 'Burger gà giòn rụm với sốt mayo cay, rau xanh và phô mai',
    price: 160000,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500&h=400&fit=crop',
    category: 'burger',
    rating: 4.5,
    reviews: 267,
    preparationTime: '12-18 phút',
    isSpicy: true,
  },
  {
    id: '6',
    name: 'Burger Chay',
    description: 'Burger từ đậu đen với rau củ tươi, bơ và sốt thuần chay',
    price: 140000,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=500&h=400&fit=crop',
    category: 'burger',
    rating: 4.3,
    reviews: 145,
    preparationTime: '10-15 phút',
    isVegetarian: true,
  },

  // Asian
  {
    id: '7',
    name: 'Phở Bò Tái',
    description: 'Phở truyền thống với thịt bò tái, nước dùng niêu sục 24h',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&h=400&fit=crop',
    category: 'asian',
    rating: 4.9,
    reviews: 512,
    preparationTime: '8-12 phút',
  },
  {
    id: '8',
    name: 'Ramen Tonkotsu',
    description: 'Ramen Nhật Bản với nước dùng xương heo đậm đà, thịt xá xíu và trứng',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=500&h=400&fit=crop',
    category: 'asian',
    rating: 4.8,
    reviews: 289,
    preparationTime: '15-20 phút',
  },
  {
    id: '9',
    name: 'Pad Thai',
    description: 'Mì xào Thái Lan với tôm, đậu phụ, giá đỗ và sốt tamarind',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1559314809-0f31657def5e?w=500&h=400&fit=crop',
    category: 'asian',
    rating: 4.6,
    reviews: 178,
    preparationTime: '12-15 phút',
    isSpicy: true,
  },

  // Healthy
  {
    id: '10',
    name: 'Salad Quinoa',
    description: 'Salad quinoa với rau xanh, cà chua bi, bơ và dressing olive oil',
    price: 110000,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
    category: 'healthy',
    rating: 4.4,
    reviews: 93,
    preparationTime: '5-8 phút',
    isVegetarian: true,
  },
  {
    id: '11',
    name: 'Smoothie Bowl Açaí',
    description: 'Bowl açaí với granola, chuối, dâu tây và hạt chia',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&h=400&fit=crop',
    category: 'healthy',
    rating: 4.7,
    reviews: 156,
    preparationTime: '5-10 phút',
    isVegetarian: true,
  },
  {
    id: '12',
    name: 'Grilled Salmon',
    description: 'Cá hồi nướng với rau củ nướng và sốt yogurt',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=400&fit=crop',
    category: 'healthy',
    rating: 4.8,
    reviews: 234,
    preparationTime: '20-25 phút',
  },

  // Dessert
  {
    id: '13',
    name: 'Tiramisu',
    description: 'Tiramisu truyền thống Ý với mascarpone và cà phê espresso',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop',
    category: 'dessert',
    rating: 4.9,
    reviews: 278,
    preparationTime: '5 phút',
    isVegetarian: true,
  },
  {
    id: '14',
    name: 'Bánh Flan',
    description: 'Bánh flan mềm mịn với caramel đắng nhẹ',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&h=400&fit=crop',
    category: 'dessert',
    rating: 4.6,
    reviews: 189,
    preparationTime: '3 phút',
    isVegetarian: true,
  },
  {
    id: '15',
    name: 'Chocolate Lava Cake',
    description: 'Bánh chocolate với lõi chocolate nóng chảy, kèm vanilla ice cream',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop',
    category: 'dessert',
    rating: 4.8,
    reviews: 345,
    preparationTime: '8-10 phút',
    isVegetarian: true,
  },

  // Drinks
  {
    id: '16',
    name: 'Trà Sữa Trân Châu',
    description: 'Trà sữa thơm ngon với trân châu đen dai ngon',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500&h=400&fit=crop',
    category: 'drinks',
    rating: 4.5,
    reviews: 567,
    preparationTime: '3-5 phút',
    isVegetarian: true,
  },
  {
    id: '17',
    name: 'Sinh Tố Xoài',
    description: 'Sinh tố xoài tươi mát với đá xay',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=400&fit=crop',
    category: 'drinks',
    rating: 4.7,
    reviews: 234,
    preparationTime: '3-5 phút',
    isVegetarian: true,
  },
  {
    id: '18',
    name: 'Cà Phê Đá',
    description: 'Cà phê phin truyền thống với đá',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=400&fit=crop',
    category: 'drinks',
    rating: 4.6,
    reviews: 445,
    preparationTime: '5-8 phút',
    isVegetarian: true,
  },
];
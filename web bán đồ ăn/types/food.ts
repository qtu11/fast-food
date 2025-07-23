export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
  rating: number;
  reviews: number;
  preparationTime: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export type FoodCategory = 
  | 'pizza'
  | 'burger'
  | 'asian'
  | 'healthy'
  | 'dessert'
  | 'drinks';

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}
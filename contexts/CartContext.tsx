"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, FoodItem, CartState } from '@/types/food';

type CartAction =
  | { type: 'ADD_ITEM'; payload: FoodItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  console.log('Cart action:', action.type, 'payload' in action ? action.payload : 'no payload');
  
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const newTotal = state.total + action.payload.price;
        console.log('Updated existing item, new total:', newTotal);
        return {
          items: updatedItems,
          total: newTotal,
          itemCount: state.itemCount + 1,
        };
      } else {
        const newItem: CartItem = { ...action.payload, quantity: 1 };
        const newTotal = state.total + action.payload.price;
        console.log('Added new item, new total:', newTotal);
        return {
          items: [...state.items, newItem],
          total: newTotal,
          itemCount: state.itemCount + 1,
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) return state;
      
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
      console.log('Removed item, new total:', newTotal);
      return {
        items: updatedItems,
        total: newTotal,
        itemCount: state.itemCount - itemToRemove.quantity,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      
      const updatedItems = state.items.map(item => {
        if (item.id === id) {
          const quantityDiff = quantity - item.quantity;
          return { ...item, quantity };
        }
        return item;
      });
      
      const item = state.items.find(item => item.id === id);
      if (!item) return state;
      
      const quantityDiff = quantity - item.quantity;
      const newTotal = state.total + (item.price * quantityDiff);
      console.log('Updated quantity, new total:', newTotal);
      return {
        items: updatedItems,
        total: newTotal,
        itemCount: state.itemCount + quantityDiff,
      };
    }
    
    case 'CLEAR_CART':
      console.log('Cart cleared');
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };
    
    default:
      return state;
  }
};

interface CartContextType {
  cart: CartState;
  addItem: (item: FoodItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  const addItem = (item: FoodItem) => {
    console.log('Adding item to cart:', item.name);
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    console.log('Removing item from cart:', id);
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    console.log('Updating quantity:', id, quantity);
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    console.log('Clearing cart');
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
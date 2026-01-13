// src/contexts/CartContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';
import { type Cart, type CartItem } from '@/api/types/cart.types';

interface CartContextType {
  cart: Cart;
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (
    productId: number,
    variantId: number | null,
    options: {
      isGlutenFree: boolean;
      isLactoseFree: boolean;
      isSugarFree: boolean;
    }
  ) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'as-cremosas-cart';

const calculateCartTotals = (
  items: CartItem[]
): { totalItems: number; totalPrice: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  return { totalItems, totalPrice };
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [cart, setCart] = useState<Cart>(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const { totalItems, totalPrice } = calculateCartTotals(
          parsed.items || []
        );
        return { items: parsed.items || [], totalItems, totalPrice };
      } catch {
        return { items: [], totalItems: 0, totalPrice: 0 };
      }
    }
    return { items: [], totalItems: 0, totalPrice: 0 };
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((item: Omit<CartItem, 'id'>) => {
    setCart(prev => {
      const existingItemIndex = prev.items.findIndex(
        i =>
          i.productId === item.productId &&
          i.productVariantId === item.productVariantId &&
          i.isGlutenFree === item.isGlutenFree &&
          i.isLactoseFree === item.isLactoseFree &&
          i.isSugarFree === item.isSugarFree
      );

      let newItems: CartItem[];

      if (existingItemIndex > -1) {
        newItems = [...prev.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + item.quantity
        };
      } else {
        const newItem: CartItem = {
          ...item,
          id: `${Date.now()}-${Math.random()}`
        };
        newItems = [...prev.items, newItem];
      }

      const { totalItems, totalPrice } = calculateCartTotals(newItems);
      return { items: newItems, totalItems, totalPrice };
    });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCart(prev => {
      const newItems = prev.items.filter(item => item.id !== itemId);
      const { totalItems, totalPrice } = calculateCartTotals(newItems);
      return { items: newItems, totalItems, totalPrice };
    });
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity < 1) return;

    setCart(prev => {
      const newItems = prev.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );
      const { totalItems, totalPrice } = calculateCartTotals(newItems);
      return { items: newItems, totalItems, totalPrice };
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart({ items: [], totalItems: 0, totalPrice: 0 });
  }, []);

  const isInCart = useCallback(
    (
      productId: number,
      variantId: number | null,
      options: {
        isGlutenFree: boolean;
        isLactoseFree: boolean;
        isSugarFree: boolean;
      }
    ) => {
      return cart.items.some(
        item =>
          item.productId === productId &&
          item.productVariantId === variantId &&
          item.isGlutenFree === options.isGlutenFree &&
          item.isLactoseFree === options.isLactoseFree &&
          item.isSugarFree === options.isSugarFree
      );
    },
    [cart.items]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { Cart, CartItem, Product, ProductVariant } from '../domain/types';
import { cartRepository } from '../data';

interface CartContextType {
  cart: Cart;
  isLoading: boolean;
  error: string | null;
  addItem: (
    itemOrProduct: Omit<CartItem, 'id'> | Product,
    variant?: ProductVariant,
    quantity?: number
  ) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  saveForLater: (itemId: string) => Promise<void>;
  moveToCart: (itemId: string) => Promise<void>;
  applyVoucher: (code: string) => Promise<void>;
  removeVoucher: () => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

const emptyCart: Cart = {
  items: [],
  sellerGroups: [],
  totalQuantity: 0,
  subtotal: 0,
  estimatedShipping: 0,
  discountAmount: 0,
  total: 0,
};

const CartContext = createContext<CartContextType>({
  cart: emptyCart,
  isLoading: true,
  error: null,
  addItem: async () => {},
  updateQuantity: async () => {},
  removeItem: async () => {},
  saveForLater: async () => {},
  moveToCart: async () => {},
  applyVoucher: async () => {},
  removeVoucher: async () => {},
  clearCart: async () => {},
  refreshCart: async () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart>(emptyCart);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshCart = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await cartRepository.getCart();
      setCart(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load cart');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const addItem = async (
    itemOrProduct: Omit<CartItem, 'id'> | Product,
    variant?: ProductVariant,
    quantity: number = 1
  ) => {
    try {
      setError(null);
      let payload: Omit<CartItem, 'id'>;

      if ('productId' in itemOrProduct) {
        payload = itemOrProduct as Omit<CartItem, 'id'>;
      } else {
        const prod = itemOrProduct as Product;
        payload = {
          productId: prod.id,
          productTitle: prod.title,
          productImage: prod.images[0] || '/placeholders/product-audio.svg',
          variantId: variant?.id,
          variantName: variant?.name,
          sellerId: prod.sellerId,
          sellerName: prod.sellerName,
          price: variant?.price || prod.price,
          quantity: quantity,
          maxStock: prod.stock ?? (prod.inStock ? 50 : 0),
        };
      }

      const updated = await cartRepository.addItem(payload);
      setCart(updated);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to add item');
      throw err;
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    try {
      setError(null);
      const updated = await cartRepository.updateQuantity(itemId, quantity);
      setCart(updated);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to update quantity');
      throw err;
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      setError(null);
      const updated = await cartRepository.removeItem(itemId);
      setCart(updated);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to remove item');
      throw err;
    }
  };

  const saveForLater = async (itemId: string) => {
    try {
      setError(null);
      const updated = await cartRepository.saveForLater(itemId);
      setCart(updated);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to save item for later');
      throw err;
    }
  };

  const moveToCart = async (itemId: string) => {
    try {
      setError(null);
      const updated = await cartRepository.moveToCart(itemId);
      setCart(updated);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to move item to cart');
      throw err;
    }
  };

  const applyVoucher = async (code: string) => {
    try {
      setError(null);
      const updated = await cartRepository.applyVoucher(code);
      setCart(updated);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to apply voucher';
      setError(msg);
      throw err;
    }
  };

  const removeVoucher = async () => {
    try {
      setError(null);
      const updated = await cartRepository.removeVoucher();
      setCart(updated);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to remove voucher');
      throw err;
    }
  };

  const clearCart = async () => {
    try {
      setError(null);
      const updated = await cartRepository.clearCart();
      setCart(updated);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to clear cart');
      throw err;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        error,
        addItem,
        updateQuantity,
        removeItem,
        saveForLater,
        moveToCart,
        applyVoucher,
        removeVoucher,
        clearCart,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

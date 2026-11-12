import { useState, useEffect, useCallback } from 'react';
import type { Product, Seller } from '../domain/types';
import { wishlistRepository } from '../data';

export const useWishlist = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [followedSellers, setFollowedSellers] = useState<Seller[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [wishlistData, sellersData] = await Promise.all([
        wishlistRepository.getWishlist(),
        wishlistRepository.getFollowedSellers(),
      ]);
      setItems(wishlistData);
      setFollowedSellers(sellersData);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load wishlist');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const toggleWishlist = async (productId: string) => {
    try {
      const nowIn = await wishlistRepository.toggleWishlist(productId);
      await refresh();
      return nowIn;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to update wishlist');
      throw err;
    }
  };

  const removeFromWishlist = async (productId: string) => {
    try {
      await wishlistRepository.removeFromWishlist(productId);
      setItems((prev) => prev.filter((p) => p.id !== productId));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to remove from wishlist');
      throw err;
    }
  };

  const toggleFollowSeller = async (sellerId: string) => {
    try {
      const nowFollowed = await wishlistRepository.toggleFollowSeller(sellerId);
      await refresh();
      return nowFollowed;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to update seller follow');
      throw err;
    }
  };

  const isInWishlist = (productId: string): boolean => {
    return items.some((p) => p.id === productId);
  };

  const isSellerFollowed = (sellerId: string): boolean => {
    return followedSellers.some((s) => s.id === sellerId);
  };

  const clearWishlist = async () => {
    try {
      for (const item of items) {
        await wishlistRepository.removeFromWishlist(item.id);
      }
      setItems([]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to clear wishlist');
      throw err;
    }
  };

  return {
    items,
    wishlist: items,
    followedSellers,
    isLoading,
    error,
    refresh,
    toggleWishlist,
    removeFromWishlist,
    clearWishlist,
    toggleFollowSeller,
    isInWishlist,
    isSellerFollowed,
  };
};

export default useWishlist;

import type { Product, Seller } from '../domain/types';
import { MOCK_PRODUCTS, MOCK_SELLERS } from './mockData';

export interface WishlistRepository {
  getWishlist(): Promise<Product[]>;
  isInWishlist(productId: string): Promise<boolean>;
  toggleWishlist(productId: string): Promise<boolean>;
  removeFromWishlist(productId: string): Promise<void>;
  getFollowedSellers(): Promise<Seller[]>;
  isSellerFollowed(sellerId: string): Promise<boolean>;
  toggleFollowSeller(sellerId: string): Promise<boolean>;
}

const WISHLIST_STORAGE_KEY = 'swiftcart_wishlist_ids';
const FOLLOWED_SELLERS_KEY = 'swiftcart_followed_sellers';

export class MockWishlistRepository implements WishlistRepository {
  private wishlistIds: Set<string> = new Set();
  private followedSellerIds: Set<string> = new Set();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const rawWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (rawWishlist) {
        this.wishlistIds = new Set(JSON.parse(rawWishlist));
      } else {
        // Initial defaults
        this.wishlistIds = new Set(['prod-infinix-hot-40-pro', 'prod-urban-kitenge-sneaker']);
        this.saveWishlist();
      }

      const rawFollowed = localStorage.getItem(FOLLOWED_SELLERS_KEY);
      if (rawFollowed) {
        this.followedSellerIds = new Set(JSON.parse(rawFollowed));
      } else {
        this.followedSellerIds = new Set(['seller-soundcore', 'seller-kampala-tech']);
        this.saveFollowed();
      }
    } catch {
      // LocalStorage error fallback
    }
  }

  private saveWishlist() {
    try {
      localStorage.setItem(
        WISHLIST_STORAGE_KEY,
        JSON.stringify(Array.from(this.wishlistIds))
      );
    } catch {
      // Ignore storage error
    }
  }

  private saveFollowed() {
    try {
      localStorage.setItem(
        FOLLOWED_SELLERS_KEY,
        JSON.stringify(Array.from(this.followedSellerIds))
      );
    } catch {
      // Ignore storage error
    }
  }

  async getWishlist(): Promise<Product[]> {
    return MOCK_PRODUCTS.filter((p) => this.wishlistIds.has(p.id));
  }

  async isInWishlist(productId: string): Promise<boolean> {
    return this.wishlistIds.has(productId);
  }

  async toggleWishlist(productId: string): Promise<boolean> {
    let nowInWishlist = false;
    if (this.wishlistIds.has(productId)) {
      this.wishlistIds.delete(productId);
    } else {
      this.wishlistIds.add(productId);
      nowInWishlist = true;
    }
    this.saveWishlist();
    return nowInWishlist;
  }

  async removeFromWishlist(productId: string): Promise<void> {
    this.wishlistIds.delete(productId);
    this.saveWishlist();
  }

  async getFollowedSellers(): Promise<Seller[]> {
    return MOCK_SELLERS.filter((s) => this.followedSellerIds.has(s.id));
  }

  async isSellerFollowed(sellerId: string): Promise<boolean> {
    return this.followedSellerIds.has(sellerId);
  }

  async toggleFollowSeller(sellerId: string): Promise<boolean> {
    let nowFollowed = false;
    if (this.followedSellerIds.has(sellerId)) {
      this.followedSellerIds.delete(sellerId);
    } else {
      this.followedSellerIds.add(sellerId);
      nowFollowed = true;
    }
    this.saveFollowed();
    return nowFollowed;
  }
}

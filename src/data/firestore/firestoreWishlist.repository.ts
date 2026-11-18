import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebaseApp';
import type { Product, Seller } from '../../domain/types';
import type { WishlistRepository } from '../wishlist.repository';
import { FirestoreCatalogRepository } from './firestoreCatalog.repository';

const WISHLIST_STORAGE_KEY = 'swiftcart_wishlist_ids';
const FOLLOWED_SELLERS_KEY = 'swiftcart_followed_sellers';

export class FirestoreWishlistRepository implements WishlistRepository {
  private localWishlist: Set<string> = new Set();
  private localFollowed: Set<string> = new Set();
  private catalogRepo = new FirestoreCatalogRepository();

  constructor() {
    this.loadFromLocal();
  }

  private loadFromLocal(): void {
    if (typeof window === 'undefined') return;
    try {
      const rawW = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (rawW) this.localWishlist = new Set(JSON.parse(rawW));
      const rawF = localStorage.getItem(FOLLOWED_SELLERS_KEY);
      if (rawF) this.localFollowed = new Set(JSON.parse(rawF));
    } catch {
      // LocalStorage error
    }
  }

  private saveToLocal(): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(Array.from(this.localWishlist)));
      localStorage.setItem(FOLLOWED_SELLERS_KEY, JSON.stringify(Array.from(this.localFollowed)));
    } catch {
      // Ignore
    }
  }

  private get uid(): string | null {
    return auth.currentUser?.uid || null;
  }

  private async getRemoteDoc(): Promise<{ productIds: string[]; followedSellerIds: string[] }> {
    const uid = this.uid;
    if (uid) {
      try {
        const snap = await getDoc(doc(db, 'wishlists', uid));
        if (snap.exists()) {
          const d = snap.data();
          return {
            productIds: d.productIds || [],
            followedSellerIds: d.followedSellerIds || [],
          };
        }
      } catch {
        // Fall back
      }
    }
    return {
      productIds: Array.from(this.localWishlist),
      followedSellerIds: Array.from(this.localFollowed),
    };
  }

  private async syncRemoteDoc(productIds: string[], followedSellerIds: string[]): Promise<void> {
    const uid = this.uid;
    if (uid) {
      try {
        await setDoc(doc(db, 'wishlists', uid), {
          productIds,
          followedSellerIds,
          updatedAt: new Date().toISOString(),
        });
      } catch {
        // Fall back to local
      }
    }
    this.localWishlist = new Set(productIds);
    this.localFollowed = new Set(followedSellerIds);
    this.saveToLocal();
  }

  async getWishlist(): Promise<Product[]> {
    const { productIds } = await this.getRemoteDoc();
    if (productIds.length === 0) return [];
    const products: Product[] = [];
    for (const pid of productIds) {
      const p = await this.catalogRepo.getProductById(pid);
      if (p) products.push(p);
    }
    return products;
  }

  async isInWishlist(productId: string): Promise<boolean> {
    const { productIds } = await this.getRemoteDoc();
    return productIds.includes(productId);
  }

  async toggleWishlist(productId: string): Promise<boolean> {
    const { productIds, followedSellerIds } = await this.getRemoteDoc();
    const set = new Set(productIds);
    let nowIn = false;
    if (set.has(productId)) {
      set.delete(productId);
    } else {
      set.add(productId);
      nowIn = true;
    }
    await this.syncRemoteDoc(Array.from(set), followedSellerIds);
    return nowIn;
  }

  async removeFromWishlist(productId: string): Promise<void> {
    const { productIds, followedSellerIds } = await this.getRemoteDoc();
    const filtered = productIds.filter((id) => id !== productId);
    await this.syncRemoteDoc(filtered, followedSellerIds);
  }

  async getFollowedSellers(): Promise<Seller[]> {
    const { followedSellerIds } = await this.getRemoteDoc();
    if (followedSellerIds.length === 0) return [];
    const sellers: Seller[] = [];
    for (const sid of followedSellerIds) {
      const s = await this.catalogRepo.getSellerById(sid);
      if (s) sellers.push(s);
    }
    return sellers;
  }

  async isSellerFollowed(sellerId: string): Promise<boolean> {
    const { followedSellerIds } = await this.getRemoteDoc();
    return followedSellerIds.includes(sellerId);
  }

  async toggleFollowSeller(sellerId: string): Promise<boolean> {
    const { productIds, followedSellerIds } = await this.getRemoteDoc();
    const set = new Set(followedSellerIds);
    let nowFollowed = false;
    if (set.has(sellerId)) {
      set.delete(sellerId);
    } else {
      set.add(sellerId);
      nowFollowed = true;
    }
    await this.syncRemoteDoc(productIds, Array.from(set));
    return nowFollowed;
  }
}

import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { db, auth } from './firebaseApp';
import type { Cart, CartItem, Voucher } from '../../domain/types';
import type { CartRepository } from '../cart.repository';
import { calculateCartTotals } from '../cart.repository';

const LOCAL_STORAGE_KEY = 'swiftcart_cart_items';
const LOCAL_VOUCHER_KEY = 'swiftcart_cart_voucher';

export class FirestoreCartRepository implements CartRepository {
  private localItems: CartItem[] = [];
  private localVoucher?: Voucher;

  constructor() {
    this.loadFromLocal();
  }

  private loadFromLocal(): void {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (raw) this.localItems = JSON.parse(raw);
      const rawV = localStorage.getItem(LOCAL_VOUCHER_KEY);
      if (rawV) this.localVoucher = JSON.parse(rawV);
    } catch {
      // Local storage disabled or error
    }
  }

  private saveToLocal(): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.localItems));
      if (this.localVoucher) {
        localStorage.setItem(LOCAL_VOUCHER_KEY, JSON.stringify(this.localVoucher));
      } else {
        localStorage.removeItem(LOCAL_VOUCHER_KEY);
      }
    } catch {
      // Ignore
    }
  }

  private get uid(): string | null {
    return auth.currentUser?.uid || null;
  }

  async getCart(): Promise<Cart> {
    const uid = this.uid;
    if (uid) {
      try {
        const snap = await getDoc(doc(db, 'carts', uid));
        if (snap.exists()) {
          const data = snap.data();
          const items: CartItem[] = data.items || [];
          const voucher: Voucher | undefined = data.voucher;
          return calculateCartTotals(items, voucher);
        }
      } catch {
        // Fall back to local
      }
    }
    return calculateCartTotals(this.localItems, this.localVoucher);
  }

  private async persistCart(items: CartItem[], voucher?: Voucher): Promise<Cart> {
    const uid = this.uid;
    if (uid) {
      try {
        await setDoc(doc(db, 'carts', uid), {
          items,
          voucher: voucher || null,
          updatedAt: new Date().toISOString(),
        });
      } catch {
        // Rules or network failure fallback
      }
    }
    this.localItems = items;
    this.localVoucher = voucher;
    this.saveToLocal();
    return calculateCartTotals(items, voucher);
  }

  async addItem(item: Omit<CartItem, 'id'>): Promise<Cart> {
    const cart = await this.getCart();
    const items = [...cart.items];
    const id = `${item.productId}_${item.variantId || 'default'}`;
    const existingIndex = items.findIndex((i) => i.id === id);

    if (existingIndex > -1) {
      const existing = items[existingIndex];
      const newQty = Math.min(existing.quantity + item.quantity, existing.maxStock);
      items[existingIndex] = { ...existing, quantity: newQty, savedForLater: false };
    } else {
      items.push({ ...item, id, savedForLater: false });
    }

    return this.persistCart(items, cart.appliedVoucher);
  }

  async updateQuantity(itemId: string, quantity: number): Promise<Cart> {
    if (quantity <= 0) return this.removeItem(itemId);
    const cart = await this.getCart();
    const items = cart.items.map((i) => {
      if (i.id === itemId) {
        return { ...i, quantity: Math.min(quantity, i.maxStock) };
      }
      return i;
    });
    return this.persistCart(items, cart.appliedVoucher);
  }

  async removeItem(itemId: string): Promise<Cart> {
    const cart = await this.getCart();
    const items = cart.items.filter((i) => i.id !== itemId);
    return this.persistCart(items, cart.appliedVoucher);
  }

  async saveForLater(itemId: string): Promise<Cart> {
    const cart = await this.getCart();
    const items = cart.items.map((i) => (i.id === itemId ? { ...i, savedForLater: true } : i));
    return this.persistCart(items, cart.appliedVoucher);
  }

  async moveToCart(itemId: string): Promise<Cart> {
    const cart = await this.getCart();
    const items = cart.items.map((i) => (i.id === itemId ? { ...i, savedForLater: false } : i));
    return this.persistCart(items, cart.appliedVoucher);
  }

  async applyVoucher(code: string): Promise<Cart> {
    const upperCode = code.trim().toUpperCase();
    let voucher: Voucher;
    if (upperCode === 'KAMPALA10' || upperCode === 'SWIFT10') {
      voucher = {
        code: upperCode,
        discountType: 'percentage',
        discountValue: 10,
        maxDiscount: 50000,
        expiryDate: '2026-12-31',
      };
    } else if (upperCode === 'FREESHIP') {
      voucher = {
        code: upperCode,
        discountType: 'fixed',
        discountValue: 5000,
        expiryDate: '2026-12-31',
      };
    } else {
      throw new Error('Invalid voucher code. Try "SWIFT10" or "FREESHIP".');
    }
    const cart = await this.getCart();
    return this.persistCart(cart.items, voucher);
  }

  async removeVoucher(): Promise<Cart> {
    const cart = await this.getCart();
    return this.persistCart(cart.items, undefined);
  }

  async clearCart(): Promise<Cart> {
    return this.persistCart([], undefined);
  }
}

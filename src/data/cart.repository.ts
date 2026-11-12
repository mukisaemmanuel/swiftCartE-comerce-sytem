import type { Cart, CartItem, SellerCartGroup, Voucher } from '../domain/types';

export interface CartRepository {
  getCart(): Promise<Cart>;
  addItem(item: Omit<CartItem, 'id'>): Promise<Cart>;
  updateQuantity(itemId: string, quantity: number): Promise<Cart>;
  removeItem(itemId: string): Promise<Cart>;
  saveForLater(itemId: string): Promise<Cart>;
  moveToCart(itemId: string): Promise<Cart>;
  applyVoucher(code: string): Promise<Cart>;
  removeVoucher(): Promise<Cart>;
  clearCart(): Promise<Cart>;
}

const STORAGE_KEY = 'swiftcart_cart_items';
const VOUCHER_STORAGE_KEY = 'swiftcart_cart_voucher';

export const groupCartBySeller = (items: CartItem[]): SellerCartGroup[] => {
  const activeItems = items.filter((item) => !item.savedForLater);
  const groupsMap = new Map<string, SellerCartGroup>();

  for (const item of activeItems) {
    if (!groupsMap.has(item.sellerId)) {
      groupsMap.set(item.sellerId, {
        sellerId: item.sellerId,
        sellerName: item.sellerName,
        items: [],
        subtotal: 0,
      });
    }
    const group = groupsMap.get(item.sellerId)!;
    group.items.push(item);
    group.subtotal += item.price * item.quantity;
  }

  return Array.from(groupsMap.values());
};

export const calculateCartTotals = (
  items: CartItem[],
  appliedVoucher?: Voucher
): Cart => {
  const sellerGroups = groupCartBySeller(items);
  const activeItems = items.filter((item) => !item.savedForLater);

  const totalQuantity = activeItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = activeItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Standard Ugandan boda delivery fee: UGX 5,000 per vendor group, 0 if empty
  const estimatedShipping = sellerGroups.length > 0 ? sellerGroups.length * 5000 : 0;

  let discountAmount = 0;
  if (appliedVoucher) {
    if (appliedVoucher.discountType === 'percentage') {
      discountAmount = Math.round((subtotal * appliedVoucher.discountValue) / 100);
      if (appliedVoucher.maxDiscount && discountAmount > appliedVoucher.maxDiscount) {
        discountAmount = appliedVoucher.maxDiscount;
      }
    } else {
      discountAmount = appliedVoucher.discountValue;
    }
    if (discountAmount > subtotal) {
      discountAmount = subtotal;
    }
  }

  const total = Math.max(0, subtotal + estimatedShipping - discountAmount);

  return {
    items,
    sellerGroups,
    totalQuantity,
    subtotal,
    estimatedShipping,
    discountAmount,
    total,
    appliedVoucher,
  };
};

export class MockCartRepository implements CartRepository {
  private items: CartItem[] = [];
  private appliedVoucher?: Voucher;

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.items = JSON.parse(raw);
      } else {
        // Initial sample cart items
        this.items = [
          {
            id: 'prod-soundcore-space-one_var-space-black',
            productId: 'prod-soundcore-space-one',
            productTitle: 'Soundcore Space One Active Noise Cancelling Wireless Headphones',
            productImage: '/placeholders/headphones.svg',
            variantId: 'var-space-black',
            variantName: 'Jet Black',
            sellerId: 'seller-soundcore',
            sellerName: 'Soundcore Uganda Flagship',
            price: 380000,
            quantity: 1,
            maxStock: 24,
            savedForLater: false,
          },
          {
            id: 'prod-nile-organic-honey_default',
            productId: 'prod-nile-organic-honey',
            productTitle: 'Nile Pure Raw Organic Honey (1kg Glass Jar)',
            productImage: '/placeholders/groceries.svg',
            sellerId: 'seller-entebbe-fresh',
            sellerName: 'Entebbe Bay Organics',
            price: 32000,
            quantity: 2,
            maxStock: 50,
            savedForLater: false,
          },
        ];
        this.saveToStorage();
      }

      const rawVoucher = localStorage.getItem(VOUCHER_STORAGE_KEY);
      if (rawVoucher) {
        this.appliedVoucher = JSON.parse(rawVoucher);
      }
    } catch {
      // LocalStorage unavailable
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
      if (this.appliedVoucher) {
        localStorage.setItem(VOUCHER_STORAGE_KEY, JSON.stringify(this.appliedVoucher));
      } else {
        localStorage.removeItem(VOUCHER_STORAGE_KEY);
      }
    } catch {
      // LocalStorage error fallback
    }
  }

  async getCart(): Promise<Cart> {
    return calculateCartTotals(this.items, this.appliedVoucher);
  }

  async addItem(item: Omit<CartItem, 'id'>): Promise<Cart> {
    const id = `${item.productId}_${item.variantId || 'default'}`;
    const existingIndex = this.items.findIndex((i) => i.id === id);

    if (existingIndex > -1) {
      const existing = this.items[existingIndex];
      const newQty = Math.min(existing.quantity + item.quantity, existing.maxStock);
      this.items[existingIndex] = { ...existing, quantity: newQty, savedForLater: false };
    } else {
      this.items.push({ ...item, id, savedForLater: false });
    }

    this.saveToStorage();
    return this.getCart();
  }

  async updateQuantity(itemId: string, quantity: number): Promise<Cart> {
    if (quantity <= 0) {
      return this.removeItem(itemId);
    }

    const item = this.items.find((i) => i.id === itemId);
    if (item) {
      item.quantity = Math.min(quantity, item.maxStock);
      this.saveToStorage();
    }
    return this.getCart();
  }

  async removeItem(itemId: string): Promise<Cart> {
    this.items = this.items.filter((i) => i.id !== itemId);
    this.saveToStorage();
    return this.getCart();
  }

  async saveForLater(itemId: string): Promise<Cart> {
    const item = this.items.find((i) => i.id === itemId);
    if (item) {
      item.savedForLater = true;
      this.saveToStorage();
    }
    return this.getCart();
  }

  async moveToCart(itemId: string): Promise<Cart> {
    const item = this.items.find((i) => i.id === itemId);
    if (item) {
      item.savedForLater = false;
      this.saveToStorage();
    }
    return this.getCart();
  }

  async applyVoucher(code: string): Promise<Cart> {
    const upperCode = code.trim().toUpperCase();
    if (upperCode === 'KAMPALA10' || upperCode === 'SWIFT10') {
      this.appliedVoucher = {
        code: upperCode,
        discountType: 'percentage',
        discountValue: 10,
        maxDiscount: 50000,
        expiryDate: '2025-12-31',
      };
      this.saveToStorage();
    } else if (upperCode === 'FREESHIP') {
      this.appliedVoucher = {
        code: upperCode,
        discountType: 'fixed',
        discountValue: 5000,
        expiryDate: '2025-12-31',
      };
      this.saveToStorage();
    } else {
      throw new Error('Invalid voucher code. Try "SWIFT10" or "FREESHIP".');
    }
    return this.getCart();
  }

  async removeVoucher(): Promise<Cart> {
    this.appliedVoucher = undefined;
    this.saveToStorage();
    return this.getCart();
  }

  async clearCart(): Promise<Cart> {
    this.items = [];
    this.appliedVoucher = undefined;
    this.saveToStorage();
    return this.getCart();
  }
}

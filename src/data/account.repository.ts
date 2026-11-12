import type {
  Address,
  Notification,
  User,
  SavedPaymentMethod,
  Voucher,
  SellerApplication,
} from '../domain/types';
import {
  MOCK_ADDRESSES,
  MOCK_NOTIFICATIONS,
  MOCK_USER,
  MOCK_PAYMENT_METHODS,
  MOCK_VOUCHERS,
  MOCK_SELLER_APPLICATION,
} from './mockData';

export interface AccountRepository {
  // User Profile
  getUserProfile(): Promise<User>;
  updateUserProfile(updates: Partial<User>): Promise<User>;

  // Addresses
  getAddresses(): Promise<Address[]>;
  addAddress(address: Omit<Address, 'id'>): Promise<Address>;
  updateAddress(id: string, address: Partial<Address>): Promise<Address>;
  deleteAddress(id: string): Promise<void>;
  setDefaultAddress(id: string): Promise<void>;

  // Payment Methods
  getPaymentMethods(): Promise<SavedPaymentMethod[]>;
  addPaymentMethod(method: Omit<SavedPaymentMethod, 'id'>): Promise<SavedPaymentMethod>;
  deletePaymentMethod(id: string): Promise<void>;
  setDefaultPaymentMethod(id: string): Promise<void>;

  // Vouchers
  getVouchers(): Promise<Voucher[]>;
  validateVoucher(code: string, subtotal: number): Promise<Voucher | null>;

  // Notifications
  getNotifications(): Promise<Notification[]>;
  markNotificationRead(id: string): Promise<void>;
  markAllNotificationsRead(): Promise<void>;

  // Seller Application
  getSellerApplication(): Promise<SellerApplication | null>;
  submitSellerApplication(app: SellerApplication): Promise<SellerApplication>;
}

export class MockAccountRepository implements AccountRepository {
  private user: User = { ...MOCK_USER };
  private addresses: Address[] = [...MOCK_ADDRESSES];
  private paymentMethods: SavedPaymentMethod[] = [...MOCK_PAYMENT_METHODS];
  private vouchers: Voucher[] = [...MOCK_VOUCHERS];
  private notifications: Notification[] = [...MOCK_NOTIFICATIONS];
  private sellerApplication: SellerApplication | null = { ...MOCK_SELLER_APPLICATION };

  async getUserProfile(): Promise<User> {
    return { ...this.user };
  }

  async updateUserProfile(updates: Partial<User>): Promise<User> {
    this.user = { ...this.user, ...updates };
    return { ...this.user };
  }

  async getAddresses(): Promise<Address[]> {
    return [...this.addresses];
  }

  async addAddress(address: Omit<Address, 'id'>): Promise<Address> {
    const newAddr: Address = {
      ...address,
      id: `addr-${Date.now()}`,
    };
    if (newAddr.isDefault) {
      this.addresses.forEach((a) => (a.isDefault = false));
    }
    this.addresses.push(newAddr);
    return newAddr;
  }

  async updateAddress(id: string, updates: Partial<Address>): Promise<Address> {
    const index = this.addresses.findIndex((a) => a.id === id);
    if (index === -1) throw new Error('Address not found');

    if (updates.isDefault) {
      this.addresses.forEach((a) => (a.isDefault = false));
    }

    this.addresses[index] = { ...this.addresses[index], ...updates };
    return this.addresses[index];
  }

  async deleteAddress(id: string): Promise<void> {
    this.addresses = this.addresses.filter((a) => a.id !== id);
  }

  async setDefaultAddress(id: string): Promise<void> {
    this.addresses.forEach((a) => {
      a.isDefault = a.id === id;
    });
  }

  async getPaymentMethods(): Promise<SavedPaymentMethod[]> {
    return [...this.paymentMethods];
  }

  async addPaymentMethod(
    method: Omit<SavedPaymentMethod, 'id'>
  ): Promise<SavedPaymentMethod> {
    const newMethod: SavedPaymentMethod = {
      ...method,
      id: `pm-${Date.now()}`,
    };
    if (newMethod.isDefault) {
      this.paymentMethods.forEach((pm) => (pm.isDefault = false));
    }
    this.paymentMethods.push(newMethod);
    return newMethod;
  }

  async deletePaymentMethod(id: string): Promise<void> {
    this.paymentMethods = this.paymentMethods.filter((pm) => pm.id !== id);
  }

  async setDefaultPaymentMethod(id: string): Promise<void> {
    this.paymentMethods.forEach((pm) => {
      pm.isDefault = pm.id === id;
    });
  }

  async getVouchers(): Promise<Voucher[]> {
    return [...this.vouchers];
  }

  async validateVoucher(code: string, subtotal: number): Promise<Voucher | null> {
    const voucher = this.vouchers.find(
      (v) => v.code.toUpperCase() === code.trim().toUpperCase()
    );
    if (!voucher) return null;
    if (voucher.minOrderAmount && subtotal < voucher.minOrderAmount) {
      return null;
    }
    return voucher;
  }

  async getNotifications(): Promise<Notification[]> {
    return [...this.notifications];
  }

  async markNotificationRead(id: string): Promise<void> {
    const notif = this.notifications.find((n) => n.id === id);
    if (notif) notif.read = true;
  }

  async markAllNotificationsRead(): Promise<void> {
    this.notifications.forEach((n) => (n.read = true));
  }

  async getSellerApplication(): Promise<SellerApplication | null> {
    return this.sellerApplication ? { ...this.sellerApplication } : null;
  }

  async submitSellerApplication(app: SellerApplication): Promise<SellerApplication> {
    this.sellerApplication = {
      ...app,
      id: `app-${Date.now()}`,
      status: 'UNDER_REVIEW',
      submittedAt: new Date().toISOString(),
    };
    return { ...this.sellerApplication };
  }
}

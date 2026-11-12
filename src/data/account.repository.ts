import type { Address, Notification } from '../domain/types';
import { MOCK_ADDRESSES, MOCK_NOTIFICATIONS } from './mockData';

export interface AccountRepository {
  getAddresses(): Promise<Address[]>;
  addAddress(address: Omit<Address, 'id'>): Promise<Address>;
  updateAddress(id: string, address: Partial<Address>): Promise<Address>;
  deleteAddress(id: string): Promise<void>;
  getNotifications(): Promise<Notification[]>;
  markNotificationRead(id: string): Promise<void>;
}

export class MockAccountRepository implements AccountRepository {
  private addresses: Address[] = [...MOCK_ADDRESSES];
  private notifications: Notification[] = [...MOCK_NOTIFICATIONS];

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

  async getNotifications(): Promise<Notification[]> {
    return [...this.notifications];
  }

  async markNotificationRead(id: string): Promise<void> {
    const notif = this.notifications.find((n) => n.id === id);
    if (notif) notif.read = true;
  }
}


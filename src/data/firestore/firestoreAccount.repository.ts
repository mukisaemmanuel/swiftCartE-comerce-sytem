import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore/lite';
import { db, auth } from './firebaseApp';
import type {
  Address,
  Notification,
  User,
  SavedPaymentMethod,
  Voucher,
  SellerApplication,
} from '../../domain/types';
import type { AccountRepository } from '../account.repository';
import {
  MOCK_USER,
  MOCK_ADDRESSES,
  MOCK_PAYMENT_METHODS,
  MOCK_VOUCHERS,
  MOCK_NOTIFICATIONS,
} from '../mockData';

export class FirestoreAccountRepository implements AccountRepository {
  private get uid(): string | null {
    return auth.currentUser?.uid || null;
  }

  async getUserProfile(): Promise<User> {
    const uid = this.uid;
    if (uid) {
      try {
        const snap = await getDoc(doc(db, 'users', uid));
        if (snap.exists()) {
          return { id: snap.id, ...(snap.data() as Omit<User, 'id'>) };
        }
      } catch {
        // Fall back
      }
    }
    return { ...MOCK_USER };
  }

  async updateUserProfile(updates: Partial<User>): Promise<User> {
    const uid = this.uid;
    if (uid) {
      try {
        await updateDoc(doc(db, 'users', uid), {
          ...updates,
          updatedAt: new Date().toISOString(),
        });
        return this.getUserProfile();
      } catch {
        // Fall back
      }
    }
    return { ...MOCK_USER, ...updates };
  }

  async getAddresses(): Promise<Address[]> {
    const uid = this.uid;
    if (uid) {
      try {
        const snap = await getDoc(doc(db, 'users', uid));
        if (snap.exists() && snap.data().addresses) {
          return snap.data().addresses as Address[];
        }
      } catch {
        // Fall back
      }
    }
    return [...MOCK_ADDRESSES];
  }

  async addAddress(address: Omit<Address, 'id'>): Promise<Address> {
    const addresses = await this.getAddresses();
    const newAddr: Address = {
      ...address,
      id: `addr-${Date.now()}`,
    };
    if (newAddr.isDefault) {
      addresses.forEach((a) => (a.isDefault = false));
    }
    addresses.push(newAddr);

    const uid = this.uid;
    if (uid) {
      await updateDoc(doc(db, 'users', uid), {
        addresses,
        updatedAt: new Date().toISOString(),
      });
    }
    return newAddr;
  }

  async updateAddress(id: string, updates: Partial<Address>): Promise<Address> {
    const addresses = await this.getAddresses();
    const index = addresses.findIndex((a) => a.id === id);
    if (index === -1) throw new Error('Address not found');

    if (updates.isDefault) {
      addresses.forEach((a) => (a.isDefault = false));
    }
    addresses[index] = { ...addresses[index], ...updates };

    const uid = this.uid;
    if (uid) {
      await updateDoc(doc(db, 'users', uid), {
        addresses,
        updatedAt: new Date().toISOString(),
      });
    }
    return addresses[index];
  }

  async deleteAddress(id: string): Promise<void> {
    const addresses = (await this.getAddresses()).filter((a) => a.id !== id);
    const uid = this.uid;
    if (uid) {
      await updateDoc(doc(db, 'users', uid), {
        addresses,
        updatedAt: new Date().toISOString(),
      });
    }
  }

  async setDefaultAddress(id: string): Promise<void> {
    const addresses = await this.getAddresses();
    addresses.forEach((a) => {
      a.isDefault = a.id === id;
    });
    const uid = this.uid;
    if (uid) {
      await updateDoc(doc(db, 'users', uid), {
        addresses,
        updatedAt: new Date().toISOString(),
      });
    }
  }

  async getPaymentMethods(): Promise<SavedPaymentMethod[]> {
    const uid = this.uid;
    if (uid) {
      try {
        const snap = await getDoc(doc(db, 'users', uid));
        if (snap.exists() && snap.data().paymentMethods) {
          return snap.data().paymentMethods as SavedPaymentMethod[];
        }
      } catch {
        // Fall back
      }
    }
    return [...MOCK_PAYMENT_METHODS];
  }

  async addPaymentMethod(
    method: Omit<SavedPaymentMethod, 'id'>
  ): Promise<SavedPaymentMethod> {
    const methods = await this.getPaymentMethods();
    const newMethod: SavedPaymentMethod = {
      ...method,
      id: `pm-${Date.now()}`,
    };
    if (newMethod.isDefault) {
      methods.forEach((pm) => (pm.isDefault = false));
    }
    methods.push(newMethod);

    const uid = this.uid;
    if (uid) {
      await updateDoc(doc(db, 'users', uid), {
        paymentMethods: methods,
        updatedAt: new Date().toISOString(),
      });
    }
    return newMethod;
  }

  async deletePaymentMethod(id: string): Promise<void> {
    const methods = (await this.getPaymentMethods()).filter((pm) => pm.id !== id);
    const uid = this.uid;
    if (uid) {
      await updateDoc(doc(db, 'users', uid), {
        paymentMethods: methods,
        updatedAt: new Date().toISOString(),
      });
    }
  }

  async setDefaultPaymentMethod(id: string): Promise<void> {
    const methods = await this.getPaymentMethods();
    methods.forEach((pm) => {
      pm.isDefault = pm.id === id;
    });
    const uid = this.uid;
    if (uid) {
      await updateDoc(doc(db, 'users', uid), {
        paymentMethods: methods,
        updatedAt: new Date().toISOString(),
      });
    }
  }

  async getVouchers(): Promise<Voucher[]> {
    try {
      const snap = await getDocs(collection(db, 'vouchers'));
      if (!snap.empty) {
        return snap.docs.map((d) => ({ ...(d.data() as Voucher) }));
      }
    } catch {
      // Fall back
    }
    return [...MOCK_VOUCHERS];
  }

  async validateVoucher(code: string, subtotal: number): Promise<Voucher | null> {
    const vouchers = await this.getVouchers();
    const voucher = vouchers.find(
      (v) => v.code.toUpperCase() === code.trim().toUpperCase()
    );
    if (!voucher) return null;
    if (voucher.minOrderAmount && subtotal < voucher.minOrderAmount) {
      return null;
    }
    return voucher;
  }

  async getNotifications(): Promise<Notification[]> {
    const uid = this.uid;
    if (uid) {
      try {
        const q = query(collection(db, 'notifications'), where('userId', '==', uid));
        const snap = await getDocs(q);
        if (!snap.empty) {
          return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Notification, 'id'>) }));
        }
      } catch {
        // Fall back
      }
    }
    return [...MOCK_NOTIFICATIONS];
  }

  async markNotificationRead(id: string): Promise<void> {
    try {
      await updateDoc(doc(db, 'notifications', id), { read: true });
    } catch {
      // Fall back
    }
  }

  async markAllNotificationsRead(): Promise<void> {
    const notifs = await this.getNotifications();
    for (const n of notifs) {
      try {
        await updateDoc(doc(db, 'notifications', n.id), { read: true });
      } catch {
        // Ignore
      }
    }
  }

  async getSellerApplication(): Promise<SellerApplication | null> {
    const uid = this.uid;
    if (uid) {
      try {
        const snap = await getDoc(doc(db, 'sellerApplications', uid));
        if (snap.exists()) {
          return { id: snap.id, ...(snap.data() as Omit<SellerApplication, 'id'>) };
        }
      } catch {
        // Fall back
      }
    }
    return null;
  }

  async submitSellerApplication(app: SellerApplication): Promise<SellerApplication> {
    const uid = this.uid || `user-${Date.now()}`;
    const newApp: SellerApplication = {
      ...app,
      id: uid,
      status: 'UNDER_REVIEW',
      submittedAt: new Date().toISOString(),
    };
    await setDoc(doc(db, 'sellerApplications', uid), newApp);
    return newApp;
  }
}

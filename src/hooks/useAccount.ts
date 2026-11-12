import { useState, useEffect, useCallback } from 'react';
import type {
  Address,
  SavedPaymentMethod,
  Voucher,
  Notification,
  User,
  SellerApplication,
} from '../domain/types';
import { accountRepository } from '../data';

export const useAccount = () => {
  const [profile, setProfile] = useState<User | null>(null);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<SavedPaymentMethod[]>([]);
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [sellerApplication, setSellerApplication] = useState<SellerApplication | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshAll = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [p, addrs, pms, vchs, notifs, sapp] = await Promise.all([
        accountRepository.getUserProfile(),
        accountRepository.getAddresses(),
        accountRepository.getPaymentMethods(),
        accountRepository.getVouchers(),
        accountRepository.getNotifications(),
        accountRepository.getSellerApplication(),
      ]);
      setProfile(p);
      setAddresses(addrs);
      setPaymentMethods(pms);
      setVouchers(vchs);
      setNotifications(notifs);
      setSellerApplication(sapp);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load account data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  // Address Actions
  const addAddress = async (addr: Omit<Address, 'id'>) => {
    const created = await accountRepository.addAddress(addr);
    const updated = await accountRepository.getAddresses();
    setAddresses(updated);
    return created;
  };

  const updateAddress = async (id: string, updates: Partial<Address>) => {
    const updatedItem = await accountRepository.updateAddress(id, updates);
    const updated = await accountRepository.getAddresses();
    setAddresses(updated);
    return updatedItem;
  };

  const deleteAddress = async (id: string) => {
    await accountRepository.deleteAddress(id);
    const updated = await accountRepository.getAddresses();
    setAddresses(updated);
  };

  const setDefaultAddress = async (id: string) => {
    await accountRepository.setDefaultAddress(id);
    const updated = await accountRepository.getAddresses();
    setAddresses(updated);
  };

  // Payment Method Actions
  const addPaymentMethod = async (pm: Omit<SavedPaymentMethod, 'id'>) => {
    const created = await accountRepository.addPaymentMethod(pm);
    const updated = await accountRepository.getPaymentMethods();
    setPaymentMethods(updated);
    return created;
  };

  const deletePaymentMethod = async (id: string) => {
    await accountRepository.deletePaymentMethod(id);
    const updated = await accountRepository.getPaymentMethods();
    setPaymentMethods(updated);
  };

  const setDefaultPaymentMethod = async (id: string) => {
    await accountRepository.setDefaultPaymentMethod(id);
    const updated = await accountRepository.getPaymentMethods();
    setPaymentMethods(updated);
  };

  // Notification Actions
  const markNotificationRead = async (id: string) => {
    await accountRepository.markNotificationRead(id);
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsRead = async () => {
    await accountRepository.markAllNotificationsRead();
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  // Seller Application Actions
  const submitSellerApplication = async (app: SellerApplication) => {
    const res = await accountRepository.submitSellerApplication(app);
    setSellerApplication(res);
    return res;
  };

  return {
    profile,
    addresses,
    paymentMethods,
    vouchers,
    notifications,
    sellerApplication,
    isLoading,
    error,
    refreshAll,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    addPaymentMethod,
    deletePaymentMethod,
    setDefaultPaymentMethod,
    markNotificationRead,
    markAllNotificationsRead,
    submitSellerApplication,
  };
};


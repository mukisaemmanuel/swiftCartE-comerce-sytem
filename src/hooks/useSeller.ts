import { useState, useEffect, useCallback } from 'react';
import {
  sellerOrdersRepository,
  sellerProductsRepository,
  sellerRidersRepository,
  sellerReturnsRepository,
  sellerWalletRepository,
  sellerAnalyticsRepository,
  sellerDiscountsRepository,
  sellerStoreRepository,
  aiAssistRepository,
} from '../data';
import type {
  SellerOrder,
  SellerProduct,
  SellerRider,
  SellerReturn,
  SellerDispute,
  SellerWallet,
  WalletTransaction,
  SellerAnalytics,
  SellerDiscount,
  SellerStoreProfile,
  SellerKyc,
  AiDescribeResult,
  AiCleanBackgroundResult,
  SellerNotification,
} from '../domain/seller.types';
import type { ORDER_STATUS } from '../../shared/statuses';

const DEFAULT_SELLER_ID = 'seller-soundcore';

export function useSellerOrders(statusFilter?: string) {
  const [orders, setOrders] = useState<SellerOrder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await sellerOrdersRepository.getOrders(DEFAULT_SELLER_ID, statusFilter);
      setOrders(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch seller orders');
    } finally {
      setIsLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const updateStatus = async (
    orderId: string,
    newStatus: (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]
  ) => {
    const updated = await sellerOrdersRepository.updateOrderStatus(orderId, newStatus);
    setOrders((prev) => prev.map((o) => (o.id === orderId ? updated : o)));
    return updated;
  };

  const assignRider = async (
    orderId: string,
    riderId: string,
    riderName: string,
    riderPhone: string
  ) => {
    const updated = await sellerOrdersRepository.assignRider(orderId, riderId, riderName, riderPhone);
    setOrders((prev) => prev.map((o) => (o.id === orderId ? updated : o)));
    return updated;
  };

  const cancelOrder = async (orderId: string, reason: string) => {
    const updated = await sellerOrdersRepository.cancelOrder(orderId, reason);
    setOrders((prev) => prev.map((o) => (o.id === orderId ? updated : o)));
    return updated;
  };

  return { orders, isLoading, error, refresh: fetchOrders, updateStatus, assignRider, cancelOrder };
}

export function useSellerOrderDetail(orderId: string) {
  const [order, setOrder] = useState<SellerOrder | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrder = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await sellerOrdersRepository.getOrderById(orderId);
      setOrder(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch order details');
    } finally {
      setIsLoading(false);
    }
  }, [orderId]);

  useEffect(() => {
    if (orderId) {
      fetchOrder();
    }
  }, [orderId, fetchOrder]);

  return { order, isLoading, error, refresh: fetchOrder };
}

export function useSellerProducts(filter?: { status?: string; search?: string }) {
  const [products, setProducts] = useState<SellerProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await sellerProductsRepository.getProducts(DEFAULT_SELLER_ID, filter);
      setProducts(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setIsLoading(false);
    }
  }, [filter?.status, filter?.search]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const createProduct = async (
    product: Omit<SellerProduct, 'id' | 'createdAt' | 'updatedAt'>
  ) => {
    const created = await sellerProductsRepository.createProduct(product);
    setProducts((prev) => [created, ...prev]);
    return created;
  };

  const updateProduct = async (
    productId: string,
    updates: Partial<SellerProduct>
  ) => {
    const updated = await sellerProductsRepository.updateProduct(productId, updates);
    setProducts((prev) => prev.map((p) => (p.id === productId ? updated : p)));
    return updated;
  };

  const updateBulkPrices = async (updates: { productId: string; price: number }[]) => {
    await sellerProductsRepository.updateBulkPrices(updates);
    await fetchProducts();
  };

  const updateBulkStock = async (updates: { productId: string; stock: number }[]) => {
    await sellerProductsRepository.updateBulkStock(updates);
    await fetchProducts();
  };

  const deleteProduct = async (productId: string) => {
    await sellerProductsRepository.deleteProduct(productId);
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return {
    products,
    isLoading,
    error,
    refresh: fetchProducts,
    createProduct,
    updateProduct,
    updateBulkPrices,
    updateBulkStock,
    deleteProduct,
  };
}

export function useSellerRiders() {
  const [riders, setRiders] = useState<SellerRider[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRiders = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await sellerRidersRepository.getRiders(DEFAULT_SELLER_ID);
      setRiders(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch couriers');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRiders();
  }, [fetchRiders]);

  const inviteRider = async (phoneNumber: string, name?: string) => {
    const newRider = await sellerRidersRepository.inviteRider(phoneNumber, name);
    setRiders((prev) => [newRider, ...prev]);
    return newRider;
  };

  return { riders, isLoading, error, refresh: fetchRiders, inviteRider };
}

export function useSellerReturns() {
  const [returns, setReturns] = useState<SellerReturn[]>([]);
  const [disputes, setDisputes] = useState<SellerDispute[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [rets, disps] = await Promise.all([
        sellerReturnsRepository.getReturns(DEFAULT_SELLER_ID),
        sellerReturnsRepository.getDisputes(DEFAULT_SELLER_ID),
      ]);
      setReturns(rets);
      setDisputes(disps);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch returns and disputes');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const approveReturn = async (returnId: string, reason: string) => {
    const updated = await sellerReturnsRepository.approveReturn(returnId, reason);
    setReturns((prev) => prev.map((r) => (r.id === returnId ? updated : r)));
    return updated;
  };

  const rejectReturn = async (returnId: string, reason: string) => {
    const updated = await sellerReturnsRepository.rejectReturn(returnId, reason);
    setReturns((prev) => prev.map((r) => (r.id === returnId ? updated : r)));
    return updated;
  };

  const markInboundReceived = async (returnId: string, condition: 'resaleable' | 'damaged') => {
    const updated = await sellerReturnsRepository.markInboundReceived(returnId, condition);
    setReturns((prev) => prev.map((r) => (r.id === returnId ? updated : r)));
    return updated;
  };

  const respondToDispute = async (
    disputeId: string,
    response: string,
    evidencePhotos?: string[]
  ) => {
    const updated = await sellerReturnsRepository.respondToDispute(disputeId, response, evidencePhotos);
    setDisputes((prev) => prev.map((d) => (d.id === disputeId ? updated : d)));
    return updated;
  };

  return {
    returns,
    disputes,
    isLoading,
    error,
    refresh: fetchData,
    approveReturn,
    rejectReturn,
    markInboundReceived,
    respondToDispute,
  };
}

export function useSellerWallet(typeFilter?: string) {
  const [wallet, setWallet] = useState<SellerWallet | null>(null);
  const [transactions, setTransactions] = useState<WalletTransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWallet = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [wData, txData] = await Promise.all([
        sellerWalletRepository.getWallet(DEFAULT_SELLER_ID),
        sellerWalletRepository.getTransactions(DEFAULT_SELLER_ID, { type: typeFilter }),
      ]);
      setWallet(wData);
      setTransactions(txData);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch wallet info');
    } finally {
      setIsLoading(false);
    }
  }, [typeFilter]);

  useEffect(() => {
    fetchWallet();
  }, [fetchWallet]);

  const requestPayout = async (
    amount: number,
    channel: 'mtn_momo' | 'airtel_money',
    account: string
  ) => {
    const tx = await sellerWalletRepository.requestPayout(
      DEFAULT_SELLER_ID,
      amount,
      channel,
      account
    );
    await fetchWallet();
    return tx;
  };

  return { wallet, transactions, isLoading, error, refresh: fetchWallet, requestPayout };
}

export function useSellerAnalytics() {
  const [analytics, setAnalytics] = useState<SellerAnalytics | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalytics = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await sellerAnalyticsRepository.getAnalytics(DEFAULT_SELLER_ID);
      setAnalytics(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch analytics');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  return { analytics, isLoading, error, refresh: fetchAnalytics };
}

export function useSellerDiscounts() {
  const [discounts, setDiscounts] = useState<SellerDiscount[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDiscounts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await sellerDiscountsRepository.getDiscounts(DEFAULT_SELLER_ID);
      setDiscounts(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch discounts');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDiscounts();
  }, [fetchDiscounts]);

  const createDiscount = async (discount: Omit<SellerDiscount, 'id' | 'usedCount'>) => {
    const created = await sellerDiscountsRepository.createDiscount(discount);
    setDiscounts((prev) => [created, ...prev]);
    return created;
  };

  const toggleStatus = async (
    discountId: string,
    status: 'active' | 'scheduled' | 'expired'
  ) => {
    const updated = await sellerDiscountsRepository.toggleDiscountStatus(discountId, status);
    setDiscounts((prev) => prev.map((d) => (d.id === discountId ? updated : d)));
    return updated;
  };

  return { discounts, isLoading, error, refresh: fetchDiscounts, createDiscount, toggleStatus };
}

export function useSellerStore() {
  const [profile, setProfile] = useState<SellerStoreProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStore = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await sellerStoreRepository.getStoreProfile(DEFAULT_SELLER_ID);
      setProfile(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch store profile');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStore();
  }, [fetchStore]);

  const updateProfile = async (updates: Partial<SellerStoreProfile>) => {
    const updated = await sellerStoreRepository.updateStoreProfile(DEFAULT_SELLER_ID, updates);
    setProfile(updated);
    return updated;
  };

  const submitKyc = async (kycData: Partial<SellerKyc>) => {
    const updatedKyc = await sellerStoreRepository.submitKycDocuments(DEFAULT_SELLER_ID, kycData);
    if (profile) {
      setProfile({ ...profile, kyc: updatedKyc });
    }
    return updatedKyc;
  };

  return { profile, isLoading, error, refresh: fetchStore, updateProfile, submitKyc };
}

export function useAiAssist() {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const describeProduct = async (
    images: string[],
    category: string,
    tone?: 'professional' | 'persuasive' | 'casual' | 'market_direct'
  ): Promise<AiDescribeResult> => {
    try {
      setIsProcessing(true);
      setError(null);
      return await aiAssistRepository.describeProduct(images, category, tone);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'AI Description generation failed';
      setError(msg);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  const cleanBackground = async (
    image: string,
    style: 'white' | 'studio' | 'lifestyle' = 'white'
  ): Promise<AiCleanBackgroundResult> => {
    try {
      setIsProcessing(true);
      setError(null);
      return await aiAssistRepository.cleanBackground(image, style);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'AI Background cleanup failed';
      setError(msg);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  return { describeProduct, cleanBackground, isProcessing, error };
}

const INITIAL_SELLER_NOTIFICATIONS: SellerNotification[] = [
  {
    id: 's-notif-1',
    sellerId: DEFAULT_SELLER_ID,
    title: 'New Confirmed Order: SWIFT-UG-8901',
    message: 'Mukisa from Kampala has confirmed payment of UGX 185,000. Funds held in escrow. Please pack items.',
    type: 'order',
    isRead: false,
    actionUrl: '/seller/orders',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 's-notif-2',
    sellerId: DEFAULT_SELLER_ID,
    title: 'Escrow Payout Released',
    message: 'UGX 228,000 for order SWIFT-UG-6531 has been credited to your available balance after delivery OTP confirmation.',
    type: 'wallet',
    isRead: false,
    actionUrl: '/seller/wallet',
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
  },
  {
    id: 's-notif-3',
    sellerId: DEFAULT_SELLER_ID,
    title: 'Customer Return Requested: SWIFT-UG-7822',
    message: 'Brian reported loose audio jack on Soundcore Q20. Please review within 24 hours.',
    type: 'return',
    isRead: true,
    actionUrl: '/seller/returns',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
  },
];

export function useSellerNotifications() {
  const [notifications, setNotifications] = useState<SellerNotification[]>(INITIAL_SELLER_NOTIFICATIONS);
  const [isLoading] = useState<boolean>(false);

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  return { notifications, isLoading, markAsRead, markAllAsRead };
}

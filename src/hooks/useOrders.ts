import { useState, useEffect, useCallback } from 'react';
import type { Order, PickupStation, ReturnRequest, Dispute } from '../domain/types';
import type { OrderStatus } from '../../shared/statuses';
import { ordersRepository } from '../data';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await ordersRepository.getOrders();
      setOrders(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load orders');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const createOrder = async (order: Partial<Order> & { idempotencyKey?: string }): Promise<Order> => {
    const newOrder = await ordersRepository.createOrder(order);
    await refresh();
    return newOrder;
  };

  const updateOrderStatus = async (orderId: string, status: OrderStatus): Promise<Order> => {
    const updated = await ordersRepository.updateOrderStatus(orderId, status);
    await refresh();
    return updated;
  };

  const addReview = async (orderId: string, review: { rating: number; comment: string }): Promise<void> => {
    await ordersRepository.addReview(orderId, review);
    await refresh();
  };

  const requestReturn = async (
    orderId: string,
    reason: string,
    details: string,
    photos: string[]
  ): Promise<ReturnRequest> => {
    const req = await ordersRepository.requestReturn(orderId, reason, details, photos);
    await refresh();
    return req;
  };

  const openDispute = async (
    orderId: string,
    reason: string,
    description: string,
    evidencePhotos: string[]
  ): Promise<Dispute> => {
    const disp = await ordersRepository.openDispute(orderId, reason, description, evidencePhotos);
    await refresh();
    return disp;
  };

  return {
    orders,
    isLoading,
    error,
    refresh,
    createOrder,
    updateOrderStatus,
    addReview,
    requestReturn,
    openDispute,
  };
};

export const usePickupStations = (district?: string) => {
  const [stations, setStations] = useState<PickupStation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await ordersRepository.getPickupStations(district);
      setStations(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load pickup stations');
    } finally {
      setIsLoading(false);
    }
  }, [district]);

  useEffect(() => {
    refresh();
  }, [district, refresh]);

  return { stations, isLoading, error, refresh };
};

import { useState, useEffect, useCallback } from 'react';
import type { Order, PickupStation } from '../domain/types';
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

  return { orders, isLoading, error, refresh };
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
  }, [refresh]);

  return { stations, isLoading, error, refresh };
};

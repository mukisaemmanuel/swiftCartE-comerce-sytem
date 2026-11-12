import type { Order, PickupStation } from '../domain/types';
import { MOCK_ORDERS, MOCK_PICKUP_STATIONS } from './mockData';

export interface OrdersRepository {
  getOrders(): Promise<Order[]>;
  getOrderById(id: string): Promise<Order | null>;
  getPickupStations(district?: string): Promise<PickupStation[]>;
  createOrder(order: Partial<Order>): Promise<Order>;
}

export class MockOrdersRepository implements OrdersRepository {
  private orders: Order[] = [...MOCK_ORDERS];

  async getOrders(): Promise<Order[]> {
    return [...this.orders];
  }

  async getOrderById(id: string): Promise<Order | null> {
    return this.orders.find((o) => o.id === id || o.orderNumber === id) || null;
  }

  async getPickupStations(district?: string): Promise<PickupStation[]> {
    if (district && district !== 'All') {
      return MOCK_PICKUP_STATIONS.filter((s) => s.district.toLowerCase() === district.toLowerCase());
    }
    return [...MOCK_PICKUP_STATIONS];
  }

  async createOrder(order: Partial<Order>): Promise<Order> {
    const newOrder: Order = {
      id: `order-${Date.now()}`,
      orderNumber: `SWIFT-UG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      status: order.status || 'PENDING',
      paymentStatus: order.paymentStatus || 'PENDING',
      escrowStatus: order.escrowStatus || 'HELD_IN_ESCROW',
      createdAt: new Date().toISOString(),
      items: order.items || [],
      subtotal: order.subtotal || 0,
      shippingFee: order.shippingFee || 0,
      total: order.total || 0,
      deliveryType: order.deliveryType || 'boda',
      deliveryAddress: order.deliveryAddress,
      pickupStation: order.pickupStation,
      handoverCode: Math.floor(100000 + Math.random() * 900000).toString(), // 6 digits
    };

    this.orders.unshift(newOrder);
    return newOrder;
  }
}


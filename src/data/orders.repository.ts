import type { Order, PickupStation, ReturnRequest, Dispute } from '../domain/types';
import type { OrderStatus } from '../../shared/statuses';
import {
  MOCK_ORDERS,
  MOCK_PICKUP_STATIONS,
  MOCK_RETURNS,
  MOCK_DISPUTES,
} from './mockData';
import { DEFAULT_RETURN_WINDOW_DAYS, DELIVERY_OTP_LENGTH } from '../../shared/constants';

export interface OrdersRepository {
  getOrders(): Promise<Order[]>;
  getOrderById(id: string): Promise<Order | null>;
  getPickupStations(district?: string): Promise<PickupStation[]>;
  createOrder(order: Partial<Order> & { idempotencyKey?: string }): Promise<Order>;
  updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order>;
  addReview(orderId: string, review: { rating: number; comment: string }): Promise<void>;
  requestReturn(
    orderId: string,
    reason: string,
    details: string,
    photos: string[]
  ): Promise<ReturnRequest>;
  getReturnRequests(): Promise<ReturnRequest[]>;
  openDispute(
    orderId: string,
    reason: string,
    description: string,
    evidencePhotos: string[]
  ): Promise<Dispute>;
  getDisputes(): Promise<Dispute[]>;
}

export class MockOrdersRepository implements OrdersRepository {
  private orders: Order[] = [...MOCK_ORDERS];
  private returns: ReturnRequest[] = [...MOCK_RETURNS];
  private disputes: Dispute[] = [...MOCK_DISPUTES];
  private idempotencyStore = new Map<string, Order>();

  async getOrders(): Promise<Order[]> {
    return [...this.orders];
  }

  async getOrderById(id: string): Promise<Order | null> {
    return this.orders.find((o) => o.id === id || o.orderNumber === id) || null;
  }

  async getPickupStations(district?: string): Promise<PickupStation[]> {
    if (district && district !== 'All') {
      return MOCK_PICKUP_STATIONS.filter(
        (s) => s.district.toLowerCase() === district.toLowerCase()
      );
    }
    return [...MOCK_PICKUP_STATIONS];
  }

  async createOrder(order: Partial<Order> & { idempotencyKey?: string }): Promise<Order> {
    // Check idempotency: If this key has already been used, return the existing order
    if (order.idempotencyKey && this.idempotencyStore.has(order.idempotencyKey)) {
      return this.idempotencyStore.get(order.idempotencyKey)!;
    }

    const randomCode = Math.floor(
      Math.pow(10, DELIVERY_OTP_LENGTH - 1) +
        Math.random() * (9 * Math.pow(10, DELIVERY_OTP_LENGTH - 1))
    ).toString();

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
      handoverCode: randomCode, // 6 digits, shown on buyer side only
      idempotencyKey: order.idempotencyKey,
      returnWindowDays: DEFAULT_RETURN_WINDOW_DAYS,
      timeline: [
        {
          status: 'PENDING',
          timestamp: 'Just now',
          title: 'Order Placed',
          description: 'Order created, awaiting payment authorization.',
        },
      ],
    };

    if (order.idempotencyKey) {
      this.idempotencyStore.set(order.idempotencyKey, newOrder);
    }

    this.orders.unshift(newOrder);
    return newOrder;
  }

  async updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order> {
    const order = await this.getOrderById(orderId);
    if (!order) throw new Error(`Order ${orderId} not found`);

    order.status = status;
    if (status === 'PAID') {
      order.paymentStatus = 'PAID';
      order.escrowStatus = 'HELD_IN_ESCROW';
    } else if (status === 'DELIVERED') {
      order.escrowStatus = 'RELEASED';
    }

    order.timeline = order.timeline || [];
    order.timeline.push({
      status,
      timestamp: 'Just now',
      title: `Status: ${status}`,
      description: `Order updated to ${status}.`,
    });

    return order;
  }

  async addReview(orderId: string, _review: { rating: number; comment: string }): Promise<void> {
    const order = await this.getOrderById(orderId);
    if (order) {
      order.reviewSubmitted = true;
    }
  }

  async requestReturn(
    orderId: string,
    reason: string,
    details: string,
    photos: string[]
  ): Promise<ReturnRequest> {
    const order = await this.getOrderById(orderId);
    const newReturn: ReturnRequest = {
      id: `ret-${Date.now()}`,
      orderId,
      orderNumber: order ? order.orderNumber : orderId,
      reason,
      details,
      photos,
      status: 'REQUESTED',
      refundAmount: order ? order.total : 0,
      createdAt: new Date().toISOString(),
    };

    if (order) {
      order.status = 'RETURN_REQUESTED';
    }

    this.returns.unshift(newReturn);
    return newReturn;
  }

  async getReturnRequests(): Promise<ReturnRequest[]> {
    return [...this.returns];
  }

  async openDispute(
    orderId: string,
    reason: string,
    description: string,
    evidencePhotos: string[]
  ): Promise<Dispute> {
    const order = await this.getOrderById(orderId);
    const newDispute: Dispute = {
      id: `disp-${Date.now()}`,
      orderId,
      orderNumber: order ? order.orderNumber : orderId,
      reason,
      description,
      evidencePhotos,
      status: 'UNDER_REVIEW',
      createdAt: new Date().toISOString(),
    };

    if (order) {
      order.status = 'DISPUTED';
      order.escrowStatus = 'FROZEN_DISPUTE';
    }

    this.disputes.unshift(newDispute);
    return newDispute;
  }

  async getDisputes(): Promise<Dispute[]> {
    return [...this.disputes];
  }
}

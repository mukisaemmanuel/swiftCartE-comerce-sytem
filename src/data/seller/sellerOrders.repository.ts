import {
  ORDER_STATUS,
  ESCROW_STATUS,
  DISPATCH_STATUS,
} from '../../../shared/statuses';
import type { SellerOrder } from '../../domain/seller.types';

export interface ISellerOrdersRepository {
  getOrders(sellerId: string, status?: string): Promise<SellerOrder[]>;
  getOrderById(orderId: string): Promise<SellerOrder | null>;
  updateOrderStatus(orderId: string, newStatus: (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]): Promise<SellerOrder>;
  assignRider(orderId: string, riderId: string, riderName: string, riderPhone: string): Promise<SellerOrder>;
  cancelOrder(orderId: string, reason: string): Promise<SellerOrder>;
}

const INITIAL_MOCK_ORDERS: SellerOrder[] = [
  {
    id: 'ord-s-101',
    orderNumber: 'SWIFT-UG-8901',
    status: ORDER_STATUS.CONFIRMED,
    paymentStatus: 'PAID',
    escrowStatus: ESCROW_STATUS.HELD_IN_ESCROW,
    dispatchStatus: DISPATCH_STATUS.PENDING,
    buyerFirstName: 'Mukisa',
    buyerDistrict: 'Kampala',
    deliveryType: 'boda',
    items: [
      {
        productId: 'prod-soundcore-space-one',
        productTitle: 'Soundcore Space One ANC Wireless Headphones',
        productImage: '/placeholders/headphones.svg',
        variantName: 'Jet Black',
        sku: 'SND-SP1-BLK',
        price: 380000,
        quantity: 1,
      },
    ],
    subtotal: 380000,
    shippingFee: 5000,
    total: 385000,
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    timeline: [
      {
        status: ORDER_STATUS.PENDING_PAYMENT,
        timestamp: '3 hours ago',
        note: 'Customer placed order via MTN MoMo',
      },
      {
        status: ORDER_STATUS.CONFIRMED,
        timestamp: '2 hours ago',
        note: 'Payment secured in SwiftCart Escrow',
      },
    ],
  },
  {
    id: 'ord-s-102',
    orderNumber: 'SWIFT-UG-9140',
    status: ORDER_STATUS.PROCESSING,
    paymentStatus: 'PAID',
    escrowStatus: ESCROW_STATUS.HELD_IN_ESCROW,
    dispatchStatus: DISPATCH_STATUS.ASSIGNED,
    buyerFirstName: 'Sarah',
    buyerDistrict: 'Wakiso',
    deliveryType: 'boda',
    assignedRiderId: 'rider-kato',
    assignedRiderName: 'Kato Denis',
    assignedRiderPhone: '+256 782 554433',
    items: [
      {
        productId: 'prod-infinix-hot-40-pro',
        productTitle: 'Infinix Hot 40 Pro 256GB ROM + 8GB RAM',
        productImage: '/placeholders/phones.svg',
        variantName: 'Starlit Black',
        sku: 'INF-H40-BLK',
        price: 685000,
        quantity: 1,
      },
    ],
    subtotal: 685000,
    shippingFee: 6000,
    total: 691000,
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 1).toISOString(),
    timeline: [
      {
        status: ORDER_STATUS.CONFIRMED,
        timestamp: '6 hours ago',
        note: 'Order confirmed and packing begun',
      },
      {
        status: ORDER_STATUS.PROCESSING,
        timestamp: '1 hour ago',
        note: 'Assigned to Boda Courier Kato Denis',
      },
    ],
  },
  {
    id: 'ord-s-103',
    orderNumber: 'SWIFT-UG-7822',
    status: ORDER_STATUS.READY_FOR_PICKUP,
    paymentStatus: 'PAID',
    escrowStatus: ESCROW_STATUS.HELD_IN_ESCROW,
    dispatchStatus: DISPATCH_STATUS.PICKED_UP,
    buyerFirstName: 'Brian',
    buyerDistrict: 'Mukono',
    deliveryType: 'pickup',
    pickupStationName: 'Kampala GPO Posta Hub',
    items: [
      {
        productId: 'prod-soundcore-anker-q20',
        productTitle: 'Soundcore Life Q20 Hybrid ANC Headphones',
        productImage: '/placeholders/product-audio.svg',
        variantName: 'Silver Gray',
        sku: 'SND-Q20-SLV',
        price: 240000,
        quantity: 1,
      },
    ],
    subtotal: 240000,
    shippingFee: 3000,
    total: 243000,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    timeline: [
      {
        status: ORDER_STATUS.CONFIRMED,
        timestamp: 'Yesterday',
      },
      {
        status: ORDER_STATUS.READY_FOR_PICKUP,
        timestamp: '4 hours ago',
        note: 'Arrived at pickup station hub',
      },
    ],
  },
  {
    id: 'ord-s-104',
    orderNumber: 'SWIFT-UG-6531',
    status: ORDER_STATUS.DELIVERED,
    paymentStatus: 'PAID',
    escrowStatus: ESCROW_STATUS.RELEASED,
    dispatchStatus: DISPATCH_STATUS.DELIVERED,
    buyerFirstName: 'Grace',
    buyerDistrict: 'Entebbe',
    deliveryType: 'boda',
    items: [
      {
        productId: 'prod-soundcore-space-one',
        productTitle: 'Soundcore Space One ANC Wireless Headphones',
        productImage: '/placeholders/headphones.svg',
        variantName: 'Cream White',
        sku: 'SND-SP1-WHT',
        price: 380000,
        quantity: 1,
      },
    ],
    subtotal: 380000,
    shippingFee: 5000,
    total: 385000,
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    timeline: [
      {
        status: ORDER_STATUS.CONFIRMED,
        timestamp: '3 days ago',
      },
      {
        status: ORDER_STATUS.DELIVERED,
        timestamp: '2 days ago',
        note: 'Buyer confirmed handover. Escrow released to seller wallet.',
      },
    ],
  },
];

export class MockSellerOrdersRepository implements ISellerOrdersRepository {
  private orders: SellerOrder[] = [...INITIAL_MOCK_ORDERS];

  async getOrders(_sellerId: string, status?: string): Promise<SellerOrder[]> {
    if (!status || status === 'ALL') {
      return [...this.orders];
    }
    return this.orders.filter((o) => o.status === status);
  }

  async getOrderById(orderId: string): Promise<SellerOrder | null> {
    const found = this.orders.find((o) => o.id === orderId || o.orderNumber === orderId);
    return found ? { ...found } : null;
  }

  async updateOrderStatus(
    orderId: string,
    newStatus: (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]
  ): Promise<SellerOrder> {
    const idx = this.orders.findIndex((o) => o.id === orderId || o.orderNumber === orderId);
    if (idx === -1) {
      throw new Error(`Order ${orderId} not found`);
    }

    const order = this.orders[idx];
    const updated: SellerOrder = {
      ...order,
      status: newStatus,
      updatedAt: new Date().toISOString(),
      timeline: [
        ...order.timeline,
        {
          status: newStatus,
          timestamp: 'Just now',
          note: `Status updated to ${newStatus}`,
        },
      ],
    };

    // If moving to ready for pickup or shipped
    if (newStatus === ORDER_STATUS.READY_FOR_PICKUP) {
      updated.dispatchStatus = DISPATCH_STATUS.PICKED_UP;
    } else if (newStatus === ORDER_STATUS.PROCESSING) {
      updated.dispatchStatus = DISPATCH_STATUS.ASSIGNED;
    }

    this.orders[idx] = updated;
    return updated;
  }

  async assignRider(
    orderId: string,
    riderId: string,
    riderName: string,
    riderPhone: string
  ): Promise<SellerOrder> {
    const idx = this.orders.findIndex((o) => o.id === orderId || o.orderNumber === orderId);
    if (idx === -1) throw new Error(`Order ${orderId} not found`);

    const updated: SellerOrder = {
      ...this.orders[idx],
      assignedRiderId: riderId,
      assignedRiderName: riderName,
      assignedRiderPhone: riderPhone,
      dispatchStatus: DISPATCH_STATUS.ASSIGNED,
      status: ORDER_STATUS.PROCESSING,
      updatedAt: new Date().toISOString(),
      timeline: [
        ...this.orders[idx].timeline,
        {
          status: ORDER_STATUS.PROCESSING,
          timestamp: 'Just now',
          note: `Courier ${riderName} assigned`,
        },
      ],
    };
    this.orders[idx] = updated;
    return updated;
  }

  async cancelOrder(orderId: string, reason: string): Promise<SellerOrder> {
    if (!reason || reason.trim().length === 0) {
      throw new Error('A cancellation reason is required');
    }
    const idx = this.orders.findIndex((o) => o.id === orderId || o.orderNumber === orderId);
    if (idx === -1) throw new Error(`Order ${orderId} not found`);

    const updated: SellerOrder = {
      ...this.orders[idx],
      status: ORDER_STATUS.CANCELLED,
      cancelReason: reason,
      escrowStatus: ESCROW_STATUS.REFUNDED,
      updatedAt: new Date().toISOString(),
      timeline: [
        ...this.orders[idx].timeline,
        {
          status: ORDER_STATUS.CANCELLED,
          timestamp: 'Just now',
          note: `Cancelled by seller: ${reason}`,
        },
      ],
    };
    this.orders[idx] = updated;
    return updated;
  }
}

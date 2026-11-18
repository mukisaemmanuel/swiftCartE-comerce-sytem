import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore/lite';
import { db, auth } from './firebaseApp';
import type { Order, PickupStation, ReturnRequest, Dispute } from '../../domain/types';
import type { OrderStatus } from '../../../shared/statuses';
import type { OrdersRepository } from '../orders.repository';
import { DEFAULT_RETURN_WINDOW_DAYS, DELIVERY_OTP_LENGTH } from '../../../shared/constants';

export class FirestoreOrdersRepository implements OrdersRepository {
  private get uid(): string | null {
    return auth.currentUser?.uid || null;
  }

  async getOrders(): Promise<Order[]> {
    const uid = this.uid;
    if (!uid) return [];
    try {
      const q = query(collection(db, 'orders'), where('buyerId', '==', uid));
      const snap = await getDocs(q);
      return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Order, 'id'>) }));
    } catch {
      return [];
    }
  }

  async getOrderById(id: string): Promise<Order | null> {
    try {
      const d = await getDoc(doc(db, 'orders', id));
      if (d.exists()) {
        return { id: d.id, ...(d.data() as Omit<Order, 'id'>) };
      }
      const q = query(collection(db, 'orders'), where('orderNumber', '==', id));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const docSnap = snap.docs[0];
        return { id: docSnap.id, ...(docSnap.data() as Omit<Order, 'id'>) };
      }
    } catch {
      // Return null on failure
    }
    return null;
  }

  async getPickupStations(district?: string): Promise<PickupStation[]> {
    try {
      const snap = await getDocs(collection(db, 'pickupStations'));
      let stations = snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<PickupStation, 'id'>) }));
      if (district && district !== 'All') {
        stations = stations.filter(
          (s) => s.district.toLowerCase() === district.toLowerCase()
        );
      }
      return stations;
    } catch {
      return [];
    }
  }

  async createOrder(order: Partial<Order> & { idempotencyKey?: string }): Promise<Order> {
    const uid = this.uid || 'anonymous-buyer';
    const randomCode = Math.floor(
      Math.pow(10, DELIVERY_OTP_LENGTH - 1) +
        Math.random() * (9 * Math.pow(10, DELIVERY_OTP_LENGTH - 1))
    ).toString();

    const orderData: Omit<Order, 'id'> = {
      orderNumber: `SWIFT-UG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      buyerId: uid,
      status: order.status || 'PENDING',
      paymentStatus: order.paymentStatus || 'PENDING',
      paymentHoldStatus: order.paymentHoldStatus || order.escrowStatus || 'HELD',
      escrowStatus: order.paymentHoldStatus || order.escrowStatus || 'HELD',
      createdAt: new Date().toISOString(),
      items: order.items || [],
      subtotal: order.subtotal || 0,
      shippingFee: order.shippingFee || 0,
      total: order.total || 0,
      deliveryType: order.deliveryType || 'boda',
      deliveryAddress: order.deliveryAddress,
      pickupStation: order.pickupStation,
      handoverCode: randomCode,
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

    const docRef = await addDoc(collection(db, 'orders'), {
      ...orderData,
      createdAtServer: serverTimestamp(),
    });

    return {
      id: docRef.id,
      ...orderData,
    };
  }

  async updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order> {
    const order = await this.getOrderById(orderId);
    if (!order) throw new Error(`Order ${orderId} not found`);

    const updates: Record<string, unknown> = {
      status,
      updatedAt: new Date().toISOString(),
    };

    if (status === 'PAID') {
      updates.paymentStatus = 'PAID';
      updates.paymentHoldStatus = 'HELD';
      updates.escrowStatus = 'HELD';
    } else if (status === 'DELIVERED') {
      updates.paymentHoldStatus = 'RELEASED';
      updates.escrowStatus = 'RELEASED';
    }

    const newTimeline = [...(order.timeline || [])];
    newTimeline.push({
      status,
      timestamp: 'Just now',
      title: `Status: ${status}`,
      description: `Order updated to ${status}.`,
    });
    updates.timeline = newTimeline;

    await updateDoc(doc(db, 'orders', order.id), updates);

    return {
      ...order,
      ...updates,
    } as Order;
  }

  async addReview(orderId: string, _review: { rating: number; comment: string }): Promise<void> {
    await updateDoc(doc(db, 'orders', orderId), {
      reviewSubmitted: true,
      updatedAt: new Date().toISOString(),
    });
  }

  async requestReturn(
    orderId: string,
    reason: string,
    details: string,
    photos: string[]
  ): Promise<ReturnRequest> {
    const order = await this.getOrderById(orderId);
    const returnData = {
      orderId,
      orderNumber: order ? order.orderNumber : orderId,
      buyerId: this.uid,
      reason,
      details,
      photos,
      status: 'REQUESTED' as const,
      refundAmount: order ? order.total : 0,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, 'returnRequests'), returnData);

    if (order) {
      await updateDoc(doc(db, 'orders', order.id), {
        status: 'RETURN_REQUESTED',
        updatedAt: new Date().toISOString(),
      });
    }

    return {
      id: docRef.id,
      ...returnData,
    };
  }

  async getReturnRequests(): Promise<ReturnRequest[]> {
    const uid = this.uid;
    if (!uid) return [];
    try {
      const q = query(collection(db, 'returnRequests'), where('buyerId', '==', uid));
      const snap = await getDocs(q);
      return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<ReturnRequest, 'id'>) }));
    } catch {
      return [];
    }
  }

  async openDispute(
    orderId: string,
    reason: string,
    description: string,
    evidencePhotos: string[]
  ): Promise<Dispute> {
    const order = await this.getOrderById(orderId);
    const disputeData = {
      orderId,
      orderNumber: order ? order.orderNumber : orderId,
      buyerId: this.uid,
      reason,
      description,
      evidencePhotos,
      status: 'UNDER_REVIEW' as const,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, 'disputes'), disputeData);

    if (order) {
      await updateDoc(doc(db, 'orders', order.id), {
        status: 'DISPUTED',
        paymentHoldStatus: 'DISPUTED',
        escrowStatus: 'DISPUTED',
        updatedAt: new Date().toISOString(),
      });
    }

    return {
      id: docRef.id,
      ...disputeData,
    };
  }

  async getDisputes(): Promise<Dispute[]> {
    const uid = this.uid;
    if (!uid) return [];
    try {
      const q = query(collection(db, 'disputes'), where('buyerId', '==', uid));
      const snap = await getDocs(q);
      return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Dispute, 'id'>) }));
    } catch {
      return [];
    }
  }
}

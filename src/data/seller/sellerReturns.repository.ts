import {
  RETURN_STATUS,
  ESCROW_STATUS,
} from '../../../shared/statuses';
import type { SellerReturn, SellerDispute } from '../../domain/seller.types';

export interface ISellerReturnsRepository {
  getReturns(sellerId: string): Promise<SellerReturn[]>;
  getDisputes(sellerId: string): Promise<SellerDispute[]>;
  approveReturn(returnId: string, reason: string): Promise<SellerReturn>;
  rejectReturn(returnId: string, reason: string): Promise<SellerReturn>;
  markInboundReceived(returnId: string, condition: 'resaleable' | 'damaged'): Promise<SellerReturn>;
  respondToDispute(disputeId: string, response: string, evidencePhotos?: string[]): Promise<SellerDispute>;
}

const INITIAL_MOCK_RETURNS: SellerReturn[] = [
  {
    id: 'ret-s-101',
    orderId: 'ord-s-103',
    orderNumber: 'SWIFT-UG-7822',
    buyerFirstName: 'Brian',
    buyerDistrict: 'Mukono',
    items: [
      {
        productId: 'prod-soundcore-anker-q20',
        productTitle: 'Soundcore Life Q20 Hybrid ANC Headphones',
        productImage: '/placeholders/product-audio.svg',
        variantName: 'Silver Gray',
        price: 240000,
        quantity: 1,
      },
    ],
    reason: 'Audio jack loose on left earcup',
    details: 'Customer reports left audio channel drops out when wire moves.',
    photos: ['/placeholders/product-audio.svg'],
    status: RETURN_STATUS.REQUESTED,
    escrowStatus: ESCROW_STATUS.FROZEN_RETURN,
    refundAmount: 240000,
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 18).toISOString(),
  },
  {
    id: 'ret-s-102',
    orderId: 'ord-s-104',
    orderNumber: 'SWIFT-UG-6531',
    buyerFirstName: 'Grace',
    buyerDistrict: 'Entebbe',
    items: [
      {
        productId: 'prod-soundcore-space-one',
        productTitle: 'Soundcore Space One ANC Wireless Headphones',
        productImage: '/placeholders/headphones.svg',
        variantName: 'Cream White',
        price: 380000,
        quantity: 1,
      },
    ],
    reason: 'Wrong color sent',
    details: 'Ordered Jet Black but received Cream White.',
    photos: ['/placeholders/headphones.svg'],
    status: RETURN_STATUS.IN_TRANSIT,
    escrowStatus: ESCROW_STATUS.FROZEN_RETURN,
    refundAmount: 380000,
    sellerResponseReason: 'Approved return for exchange or refund.',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
];

const INITIAL_MOCK_DISPUTES: SellerDispute[] = [
  {
    id: 'disp-s-201',
    orderId: 'ord-s-101',
    orderNumber: 'SWIFT-UG-8901',
    buyerFirstName: 'Mukisa',
    buyerDistrict: 'Kampala',
    reason: 'Delivery Delay',
    description: 'Merchant took longer than 48 hours to confirm dispatch.',
    evidencePhotos: ['/placeholders/headphones.svg'],
    status: 'OPEN',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
];

export class MockSellerReturnsRepository implements ISellerReturnsRepository {
  private returns: SellerReturn[] = [...INITIAL_MOCK_RETURNS];
  private disputes: SellerDispute[] = [...INITIAL_MOCK_DISPUTES];

  async getReturns(_sellerId: string): Promise<SellerReturn[]> {
    return [...this.returns];
  }

  async getDisputes(_sellerId: string): Promise<SellerDispute[]> {
    return [...this.disputes];
  }

  async approveReturn(returnId: string, reason: string): Promise<SellerReturn> {
    if (!reason || reason.trim().length === 0) {
      throw new Error('A reason or instruction is required to approve the return');
    }
    const idx = this.returns.findIndex((r) => r.id === returnId);
    if (idx === -1) throw new Error(`Return ${returnId} not found`);

    const updated: SellerReturn = {
      ...this.returns[idx],
      status: RETURN_STATUS.APPROVED,
      sellerResponseReason: reason,
      updatedAt: new Date().toISOString(),
    };
    this.returns[idx] = updated;
    return updated;
  }

  async rejectReturn(returnId: string, reason: string): Promise<SellerReturn> {
    if (!reason || reason.trim().length === 0) {
      throw new Error('A rejection reason is required');
    }
    const idx = this.returns.findIndex((r) => r.id === returnId);
    if (idx === -1) throw new Error(`Return ${returnId} not found`);

    const updated: SellerReturn = {
      ...this.returns[idx],
      status: RETURN_STATUS.REJECTED,
      sellerResponseReason: reason,
      updatedAt: new Date().toISOString(),
    };
    this.returns[idx] = updated;
    return updated;
  }

  async markInboundReceived(
    returnId: string,
    condition: 'resaleable' | 'damaged'
  ): Promise<SellerReturn> {
    const idx = this.returns.findIndex((r) => r.id === returnId);
    if (idx === -1) throw new Error(`Return ${returnId} not found`);

    const updated: SellerReturn = {
      ...this.returns[idx],
      status:
        condition === 'resaleable'
          ? RETURN_STATUS.RECEIVED_RESALEABLE
          : RETURN_STATUS.RECEIVED_DAMAGED,
      escrowStatus:
        condition === 'resaleable'
          ? ESCROW_STATUS.REFUNDED
          : ESCROW_STATUS.FROZEN_DISPUTE,
      updatedAt: new Date().toISOString(),
    };
    this.returns[idx] = updated;
    return updated;
  }

  async respondToDispute(
    disputeId: string,
    response: string,
    evidencePhotos: string[] = []
  ): Promise<SellerDispute> {
    if (!response || response.trim().length === 0) {
      throw new Error('A response message is required');
    }
    const idx = this.disputes.findIndex((d) => d.id === disputeId);
    if (idx === -1) throw new Error(`Dispute ${disputeId} not found`);

    const updated: SellerDispute = {
      ...this.disputes[idx],
      status: 'UNDER_REVIEW',
      sellerResponse: response,
      sellerEvidence: evidencePhotos,
      updatedAt: new Date().toISOString(),
    };
    this.disputes[idx] = updated;
    return updated;
  }
}

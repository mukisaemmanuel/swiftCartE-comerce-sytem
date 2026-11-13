import type { SellerDiscount } from '../../domain/seller.types';

export interface ISellerDiscountsRepository {
  getDiscounts(sellerId: string): Promise<SellerDiscount[]>;
  createDiscount(discount: Omit<SellerDiscount, 'id' | 'usedCount'>): Promise<SellerDiscount>;
  toggleDiscountStatus(discountId: string, status: 'active' | 'scheduled' | 'expired'): Promise<SellerDiscount>;
}

const INITIAL_MOCK_DISCOUNTS: SellerDiscount[] = [
  {
    id: 'disc-1',
    code: 'SOUND10',
    description: '10% off all Soundcore headphones and audio',
    discountType: 'percentage',
    discountValue: 10,
    minSpend: 200000,
    usageLimit: 100,
    usedCount: 42,
    status: 'active',
    startDate: '2026-11-01',
    endDate: '2026-11-30',
  },
  {
    id: 'disc-2',
    code: 'KAMPALAFREE',
    description: 'UGX 5,000 off delivery on orders over UGX 300,000',
    discountType: 'fixed',
    discountValue: 5000,
    minSpend: 300000,
    usageLimit: 50,
    usedCount: 28,
    status: 'active',
    startDate: '2026-11-05',
    endDate: '2026-11-25',
  },
  {
    id: 'disc-3',
    code: 'FLASH50',
    description: 'Holiday mega flash sale',
    discountType: 'percentage',
    discountValue: 15,
    minSpend: 500000,
    usageLimit: 30,
    usedCount: 30,
    status: 'expired',
    startDate: '2026-10-01',
    endDate: '2026-10-15',
  },
];

export class MockSellerDiscountsRepository implements ISellerDiscountsRepository {
  private discounts: SellerDiscount[] = [...INITIAL_MOCK_DISCOUNTS];

  async getDiscounts(_sellerId: string): Promise<SellerDiscount[]> {
    return [...this.discounts];
  }

  async createDiscount(
    discount: Omit<SellerDiscount, 'id' | 'usedCount'>
  ): Promise<SellerDiscount> {
    const newDiscount: SellerDiscount = {
      ...discount,
      id: `disc-${Date.now()}`,
      usedCount: 0,
    };
    this.discounts.unshift(newDiscount);
    return newDiscount;
  }

  async toggleDiscountStatus(
    discountId: string,
    status: 'active' | 'scheduled' | 'expired'
  ): Promise<SellerDiscount> {
    const idx = this.discounts.findIndex((d) => d.id === discountId);
    if (idx === -1) throw new Error(`Discount ${discountId} not found`);

    const updated = {
      ...this.discounts[idx],
      status,
    };
    this.discounts[idx] = updated;
    return updated;
  }
}

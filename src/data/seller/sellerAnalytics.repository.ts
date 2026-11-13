import type { SellerAnalytics } from '../../domain/seller.types';

export interface ISellerAnalyticsRepository {
  getAnalytics(sellerId: string): Promise<SellerAnalytics>;
}

const MOCK_ANALYTICS: SellerAnalytics = {
  todaySales: 1065000, // UGX 1,065,000
  todaySalesGrowthPercent: 18.4,
  todayOrdersCount: 4,
  ordersToProcessCount: 2,
  returnRatePercent: 1.2,
  weeklyRevenue: [
    { date: 'Mon', amount: 820000 },
    { date: 'Tue', amount: 950000 },
    { date: 'Wed', amount: 1120000 },
    { date: 'Thu', amount: 740000 },
    { date: 'Fri', amount: 1450000 },
    { date: 'Sat', amount: 1680000 },
    { date: 'Sun', amount: 1065000 },
  ],
  topSellingProducts: [
    {
      productId: 'prod-soundcore-space-one',
      productTitle: 'Soundcore Space One ANC Wireless Headphones',
      salesCount: 42,
      revenue: 15960000,
    },
    {
      productId: 'prod-soundcore-anker-q20',
      productTitle: 'Soundcore Life Q20 Hybrid ANC Headphones',
      salesCount: 38,
      revenue: 9120000,
    },
    {
      productId: 'prod-infinix-hot-40-pro',
      productTitle: 'Infinix Hot 40 Pro 256GB ROM + 8GB RAM',
      salesCount: 16,
      revenue: 10960000,
    },
  ],
};

export class MockSellerAnalyticsRepository implements ISellerAnalyticsRepository {
  async getAnalytics(_sellerId: string): Promise<SellerAnalytics> {
    return { ...MOCK_ANALYTICS };
  }
}

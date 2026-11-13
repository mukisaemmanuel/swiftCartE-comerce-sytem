import type {
  ORDER_STATUS,
  ESCROW_STATUS,
  DISPATCH_STATUS,
  RETURN_STATUS,
  PRODUCT_STATUS,
  PAYOUT_STATUS,
  SELLER_STATUS,
} from '../../shared/statuses';

export interface SellerOrderItem {
  productId: string;
  productTitle: string;
  productImage: string;
  variantName?: string;
  sku?: string;
  price: number; // Integer UGX
  quantity: number;
}

export interface SellerOrder {
  id: string;
  orderNumber: string; // e.g. "SWIFT-UG-8901"
  status: (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
  paymentStatus: string;
  escrowStatus: (typeof ESCROW_STATUS)[keyof typeof ESCROW_STATUS];
  dispatchStatus: (typeof DISPATCH_STATUS)[keyof typeof DISPATCH_STATUS];
  // STRICT DATA PRIVACY: First name & district only!
  buyerFirstName: string;
  buyerDistrict: string;
  deliveryType: 'boda' | 'pickup';
  pickupStationName?: string;
  items: SellerOrderItem[];
  subtotal: number; // Integer UGX
  shippingFee: number; // Integer UGX
  total: number; // Integer UGX
  createdAt: string;
  updatedAt: string;
  assignedRiderId?: string;
  assignedRiderName?: string;
  assignedRiderPhone?: string;
  cancelReason?: string;
  timeline: {
    status: (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
    timestamp: string;
    note?: string;
  }[];
}

export interface ProductVariant {
  id: string;
  name: string; // e.g. "Space Gray / 256GB"
  sku: string;
  price: number; // Integer UGX
  stock: number;
  attributes: Record<string, string>;
}

export interface SellerProduct {
  id: string;
  sellerId: string;
  title: string;
  slug: string;
  description: string;
  categoryId: string;
  categoryName: string;
  brand: string;
  price: number; // Integer UGX
  compareAtPrice?: number;
  stock: number;
  sku: string;
  weightKg?: number;
  status: (typeof PRODUCT_STATUS)[keyof typeof PRODUCT_STATUS];
  images: string[];
  variants: ProductVariant[];
  warranty?: string;
  expiryDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SellerRider {
  id: string;
  name: string;
  phoneNumber: string;
  bikePlate: string;
  status: 'available' | 'busy' | 'offline';
  rating: number;
  deliveriesCount: number;
  avatarUrl?: string;
  joinedDate: string;
}

export interface SellerReturn {
  id: string;
  orderId: string;
  orderNumber: string;
  buyerFirstName: string;
  buyerDistrict: string;
  items: SellerOrderItem[];
  reason: string;
  details: string;
  photos: string[];
  status: (typeof RETURN_STATUS)[keyof typeof RETURN_STATUS];
  escrowStatus: (typeof ESCROW_STATUS)[keyof typeof ESCROW_STATUS];
  refundAmount: number; // Integer UGX
  sellerResponseReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SellerDispute {
  id: string;
  orderId: string;
  orderNumber: string;
  buyerFirstName: string;
  buyerDistrict: string;
  reason: string;
  description: string;
  evidencePhotos: string[];
  sellerResponse?: string;
  sellerEvidence?: string[];
  status: 'OPEN' | 'UNDER_REVIEW' | 'RESOLVED_SELLER' | 'RESOLVED_BUYER';
  createdAt: string;
  updatedAt: string;
}

export interface WalletTransaction {
  id: string;
  type: 'sale' | 'payout' | 'refund' | 'fee';
  amount: number; // Integer UGX (positive or negative)
  balanceAfter: number; // Integer UGX
  orderNumber?: string;
  description: string;
  status: (typeof PAYOUT_STATUS)[keyof typeof PAYOUT_STATUS];
  channel?: 'mtn_momo' | 'airtel_money' | 'bank';
  accountReference?: string;
  createdAt: string;
}

export interface SellerWallet {
  availableBalance: number; // Integer UGX
  inEscrowBalance: number; // Integer UGX
  totalPaidOut: number; // Integer UGX
  currency: 'UGX';
  lastPayoutDate?: string;
}

export interface SellerKyc {
  status: 'NOT_STARTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
  nationalIdNumber?: string;
  documentType?: 'national_id' | 'passport' | 'trading_license';
  documentFrontUrl?: string;
  documentBackUrl?: string;
  tradingLicenseUrl?: string;
  submittedAt?: string;
  rejectionReason?: string;
}

export interface SellerStoreProfile {
  id: string;
  name: string;
  slug: string;
  district: string;
  location: string;
  status: (typeof SELLER_STATUS)[keyof typeof SELLER_STATUS];
  rating: number;
  reviewCount: number;
  bio: string;
  avatarUrl?: string;
  bannerUrl?: string;
  contactEmail: string;
  contactPhone: string;
  payoutMethod: 'mtn_momo' | 'airtel_money';
  payoutAccount: string;
  accountHolderName: string;
  kyc: SellerKyc;
}

export interface SellerAnalytics {
  todaySales: number; // Integer UGX
  todaySalesGrowthPercent: number;
  todayOrdersCount: number;
  ordersToProcessCount: number;
  returnRatePercent: number;
  weeklyRevenue: { date: string; amount: number }[];
  topSellingProducts: {
    productId: string;
    productTitle: string;
    salesCount: number;
    revenue: number;
  }[];
}

export interface SellerDiscount {
  id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number; // 10 (%) or 5000 (UGX)
  minSpend?: number; // Integer UGX
  usageLimit?: number;
  usedCount: number;
  status: 'active' | 'scheduled' | 'expired';
  startDate: string;
  endDate: string;
}

export interface AiDescribeResult {
  title: string;
  description: string;
  suggestedCategory: string;
  suggestedTags: string[];
  suggestedPrice: number;
  unconfirmedFields: {
    brand: string;
    warranty: string;
    expiryDate?: string;
  };
}

export interface AiCleanBackgroundResult {
  originalImage: string;
  cleanedImage: string;
  style: 'white' | 'studio' | 'lifestyle';
  freeCleansRemainingToday: number;
}

export interface SellerNotification {
  id: string;
  sellerId: string;
  title: string;
  message: string;
  type: 'order' | 'return' | 'wallet' | 'system';
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}

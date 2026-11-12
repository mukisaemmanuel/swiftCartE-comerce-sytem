import type {
  OrderStatus,
  PaymentStatus,
  EscrowStatus,
  SellerStatus,
  ProductStatus,
  ReturnStatus,
} from '../../shared/statuses';

export interface User {
  id: string;
  fullName: string;
  email?: string;
  phoneNumber: string;
  avatarUrl?: string;
  isVerified?: boolean;
  createdAt?: string;
}

export interface SavedPaymentMethod {
  id: string;
  type: 'mtn_momo' | 'airtel_money' | 'card';
  phoneNumber?: string;
  cardLast4?: string;
  cardBrand?: string;
  accountName?: string;
  isDefault?: boolean;
}

export interface ReturnRequest {
  id: string;
  orderId: string;
  orderNumber: string;
  reason: string;
  details: string;
  photos: string[];
  status: ReturnStatus;
  refundAmount: number;
  createdAt: string;
  resolutionDate?: string;
}

export interface Dispute {
  id: string;
  orderId: string;
  orderNumber: string;
  reason: string;
  description: string;
  evidencePhotos: string[];
  status: 'OPEN' | 'UNDER_REVIEW' | 'RESOLVED_BUYER' | 'RESOLVED_SELLER';
  createdAt: string;
}

export interface SellerApplication {
  id?: string;
  storeName: string;
  category: string;
  contactName: string;
  email: string;
  phoneNumber: string;
  district: string;
  physicalAddress: string;
  nationalIdNumber: string;
  payoutMethod: 'mtn_momo' | 'airtel_money' | 'bank';
  payoutAccount: string;
  accountHolderName: string;
  status: 'PENDING' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number; // Integer in UGX
  originalPrice?: number;
  stock: number;
  attributes?: Record<string, string>;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number; // Integer in UGX
  originalPrice?: number;
  images: string[];
  sellerId: string;
  sellerName: string;
  isSellerVerified: boolean;
  categoryId: string;
  categoryName: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stock?: number;
  status?: ProductStatus;
  variants?: ProductVariant[];
  tags?: string[];
  featured?: boolean;
  trending?: boolean;
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  imageUrl?: string;
  itemCount?: number;
  subcategories?: { id: string; name: string }[];
}

export interface Seller {
  id: string;
  name: string;
  slug: string;
  district: string; // e.g. Kampala, Wakiso, Mukono, Entebbe, Jinja
  location: string;
  isVerified: boolean;
  isOfficialStore?: boolean;
  rating: number;
  reviewCount: number;
  joinedDate: string;
  status: SellerStatus;
  avatarUrl?: string;
  logoUrl?: string;
  bannerUrl?: string;
  followerCount: number;
  productCount: number;
  bio?: string;
  dispatchSpeedHours?: number;
}

export interface CartItem {
  id: string;
  productId: string;
  productTitle: string;
  productImage: string;
  variantId?: string;
  variantName?: string;
  sellerId: string;
  sellerName: string;
  price: number; // Integer in UGX
  quantity: number;
  maxStock: number;
  savedForLater?: boolean;
}

export interface SellerCartGroup {
  sellerId: string;
  sellerName: string;
  items: CartItem[];
  subtotal: number; // Integer in UGX
}

export interface Voucher {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderAmount?: number;
  maxDiscount?: number;
  expiryDate: string;
}

export interface Cart {
  items: CartItem[];
  sellerGroups: SellerCartGroup[];
  totalQuantity: number;
  subtotal: number; // Integer in UGX
  estimatedShipping: number; // Integer in UGX
  discountAmount: number; // Integer in UGX
  total: number; // Integer in UGX
  appliedVoucher?: Voucher;
}

export interface Address {
  id: string;
  fullName: string;
  phoneNumber: string;
  district: string;
  division?: string;
  streetAddress: string;
  landmark?: string;
  isDefault?: boolean;
}

export interface PickupStation {
  id: string;
  name: string;
  district: string;
  address: string;
  fee: number; // Integer in UGX
  estimatedDays: number;
  operatingHours: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}

export interface OrderItem {
  productId: string;
  productTitle: string;
  productImage: string;
  variantName?: string;
  price: number;
  quantity: number;
  sellerId: string;
  sellerName: string;
}

export interface OrderTimelineEvent {
  status: OrderStatus;
  timestamp: string;
  title: string;
  description: string;
}

export interface OrderRider {
  name: string;
  phone: string;
  bikePlate: string;
  rating: number;
  avatarUrl?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  escrowStatus: EscrowStatus;
  createdAt: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
  deliveryType: 'boda' | 'pickup';
  deliveryAddress?: Address;
  pickupStation?: PickupStation;
  handoverCode?: string; // 6 digits, shown on buyer side only
  idempotencyKey?: string;
  timeline?: OrderTimelineEvent[];
  rider?: OrderRider;
  returnWindowDays?: number;
  reviewSubmitted?: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'order' | 'promo' | 'system';
}

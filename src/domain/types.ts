import type {
  OrderStatus,
  PaymentStatus,
  EscrowStatus,
  SellerStatus,
  ProductStatus,
} from '../../shared/statuses';

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
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'order' | 'promo' | 'system';
}

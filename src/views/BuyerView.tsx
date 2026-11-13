import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

// Converted Mockup Screens
import {
  Home,
  HomeAlt,
  Cart,
  Wishlist,
  Search,
  SearchAlt,
  ProductDetail,
  ProductDetailAlt,
  Categories,
  CategoriesAlt,
  Store,
  FollowedStores,
  FollowedStoresAlt,
  Checkout,
  CheckoutDeliveryCode,
  PaymentWaiting,
  DeliveryAddresses,
  PaymentMethods,
  PaymentMethodsAlt,
  OrderConfirmation,
  MyOrders,
  OrderDetail,
  OrderTracking,
  LiveRiderTracking,
  OrderDelivered,
  PickupStations,
  ReturnsDisputes,
  EscrowDisputeReturn,
  DisputeEvidence,
  DisputePhotos,
  ScanQr,
  SignIn,
  SignInAlt,
  Register,
  PhoneVerification,
  PhoneVerificationAlt,
  ForgotPassword,
  Account,
  Vouchers,
  Notifications,
  NotificationsAlt,
  HelpCentre,
  TermsPrivacy,
  PrivacyPolicy,
  BecomeSeller,
  SellerApplicationStatus,
  EmptyErrorSuite,
  SplashFirstOpen,
  SplashWelcome,
  AddMobileMoney,
  MtnMomoUssd,
} from '../mockups/buyer';

export interface BuyerViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const BuyerView: React.FC<BuyerViewProps> = ({ route, onNavigate }) => {
  const { addItem } = useCart();
  const { toggleWishlist } = useWishlist();

  const handleAction = (action: string, payload?: unknown) => {
    const p = payload as { id?: string; quantity?: number } | undefined;
    if (action === 'add-to-cart') {
      const defaultProduct = {
        id: 'prod_soundcore_space_one',
        title: 'Soundcore Space One ANC Wireless Headphones',
        slug: 'soundcore-space-one',
        price: 380000,
        originalPrice: 420000,
        sellerId: 'store_anker_ug',
        sellerName: 'Anker Official Store UG',
        isSellerVerified: true,
        categoryId: 'cat_audio',
        categoryName: 'Audio & Headphones',
        rating: 4.8,
        reviewCount: 142,
        images: ['/images/product-audio.svg'],
        inStock: true,
        description: 'Adaptive Active Noise Cancelling headphones',
        specifications: {},
      };
      addItem(defaultProduct, undefined, p?.quantity || 1);
    } else if (action === 'wishlist') {
      toggleWishlist(p?.id || 'prod_soundcore_space_one');
    }
  };

  const renderActiveScreen = () => {
    const path = route.path;

    // 1. Home
    if (path === '/') return <Home onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/-alt' || path === '/home-marketplace-2') return <HomeAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/home')) return <Home onNavigate={onNavigate} onAction={handleAction} />;

    // 2. Categories
    if (path === '/categories') return <Categories onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/categories-mega-directory-2') return <CategoriesAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/categories') || path === '/search-categories') {
      return <Categories onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 3. Search & Results
    if (path === '/search' || path === '/search-experience') return <Search onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/search-results-2') return <SearchAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/search')) return <Search onNavigate={onNavigate} onAction={handleAction} />;

    // 4. Product Detail
    if (path === '/product-detail-soundcore-space-one-2') return <ProductDetailAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/product-detail') || path.startsWith('/product')) {
      return <ProductDetail onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 5. Store Page
    if (path.startsWith('/store-page') || path.startsWith('/store')) {
      return <Store onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 6. Followed Stores
    if (path === '/followed-stores-2') return <FollowedStoresAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/followed-stores')) return <FollowedStores onNavigate={onNavigate} onAction={handleAction} />;

    // 7. Wishlist
    if (path.startsWith('/wishlist')) return <Wishlist onNavigate={onNavigate} onAction={handleAction} />;

    // 8. Cart
    if (path.startsWith('/cart')) return <Cart onNavigate={onNavigate} onAction={handleAction} />;

    // 9. Checkout Flow
    if (path === '/checkout-delivery-code') return <CheckoutDeliveryCode onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/checkout')) return <Checkout onNavigate={onNavigate} onAction={handleAction} />;

    // 10. Pickup Station Chooser
    if (path.startsWith('/pickup-station')) return <PickupStations onNavigate={onNavigate} onAction={handleAction} />;

    // 11. Delivery Addresses
    if (path.startsWith('/delivery-addresses')) return <DeliveryAddresses onNavigate={onNavigate} onAction={handleAction} />;

    // 12. Payment Methods & Add Mobile Money Sheet
    if (path === '/add-money-bottom-sheet' || path === '/add-mobile-money-bottom-sheet') {
      return <AddMobileMoney onNavigate={onNavigate} onAction={handleAction} />;
    }
    if (path === '/payment-methods-2') return <PaymentMethodsAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/payment-methods')) return <PaymentMethods onNavigate={onNavigate} onAction={handleAction} />;

    // 13. Payment Waiting / USSD PIN Prompt
    if (path.startsWith('/mtn-momo-ussd')) return <MtnMomoUssd onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/checkout-one-flow-payment-waiting') return <PaymentWaiting onNavigate={onNavigate} onAction={handleAction} />;

    // 14. Order Confirmation & Delivery Handover Code
    if (path.startsWith('/order-confirmation')) {
      return <OrderConfirmation onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 15. My Orders List
    if (path === '/my-orders' || path === '/orders') return <MyOrders onNavigate={onNavigate} onAction={handleAction} />;

    // 16. Order Detail
    if (path === '/my-orders-order-detail' || path.startsWith('/order-detail')) {
      return <OrderDetail onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 17. Order Tracking & Live Boda Map
    if (path.startsWith('/live-rider-tracking') || path.startsWith('/live-boda-rider')) {
      return <LiveRiderTracking onNavigate={onNavigate} onAction={handleAction} />;
    }
    if (path.startsWith('/order-tracking')) {
      return <OrderTracking onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 18. Order Delivered & Review Modal
    if (path.startsWith('/order-delivered')) return <OrderDelivered onNavigate={onNavigate} onAction={handleAction} />;

    // 19. Returns & Escrow Disputes
    if (path === '/returns-disputes') return <ReturnsDisputes onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/escrow-dispute-return-request' || path === '/escrow-dispute') {
      return <EscrowDisputeReturn onNavigate={onNavigate} onAction={handleAction} />;
    }
    if (path === '/dispute-evidence-form' || path === '/dispute-evidence') {
      return <DisputeEvidence onNavigate={onNavigate} onAction={handleAction} />;
    }
    if (path === '/submit-dispute-photos' || path === '/dispute-photos') {
      return <DisputePhotos onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 20. Scan QR Handover
    if (path === '/scan-qr-handover') return <ScanQr onNavigate={onNavigate} onAction={handleAction} />;

    // 21. Auth: Sign In
    if (path === '/sign-in-2') return <SignInAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/sign-in')) return <SignIn onNavigate={onNavigate} onAction={handleAction} />;

    // 22. Auth: Register
    if (path.startsWith('/register')) return <Register onNavigate={onNavigate} onAction={handleAction} />;

    // 23. Auth: Forgot Password
    if (path.startsWith('/forgot-password')) return <ForgotPassword onNavigate={onNavigate} onAction={handleAction} />;

    // 24. Auth: Phone Verification
    if (path === '/phone-verification-2') return <PhoneVerificationAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/phone-verification')) {
      return <PhoneVerification onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 25. Account Profile
    if (path === '/account' || path === '/buyer-account-profile') {
      return <Account onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 26. Vouchers
    if (path.startsWith('/vouchers')) return <Vouchers onNavigate={onNavigate} onAction={handleAction} />;

    // 27. Notifications
    if (path === '/messages-notifications') return <NotificationsAlt onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/notifications')) return <Notifications onNavigate={onNavigate} onAction={handleAction} />;

    // 28. Help Centre & Support
    if (path.startsWith('/help-centre')) return <HelpCentre onNavigate={onNavigate} onAction={handleAction} />;

    // 29. Terms & Privacy Policy
    if (path.startsWith('/privacy-policy')) return <PrivacyPolicy onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/terms')) return <TermsPrivacy onNavigate={onNavigate} onAction={handleAction} />;

    // 30. Splash / Welcome
    if (path === '/splash-first-open') return <SplashFirstOpen onNavigate={onNavigate} onAction={handleAction} />;
    if (path.startsWith('/splash')) return <SplashWelcome onNavigate={onNavigate} onAction={handleAction} />;

    // 31. Become a Seller (4 Steps)
    if (path.startsWith('/become-a-seller') || path === '/become-seller') {
      return <BecomeSeller onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 32. Seller Application Status
    if (path.startsWith('/seller-application-status')) {
      return <SellerApplicationStatus onNavigate={onNavigate} onAction={handleAction} />;
    }

    // 33. Empty & Error States Suite
    if (path.startsWith('/empty-error-states')) {
      return <EmptyErrorSuite onNavigate={onNavigate} onAction={handleAction} />;
    }

    // Fallback: Default to Home screen
    return <Home onNavigate={onNavigate} onAction={handleAction} />;
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-surface text-on-surface">
      {renderActiveScreen()}
    </div>
  );
};

export default BuyerView;

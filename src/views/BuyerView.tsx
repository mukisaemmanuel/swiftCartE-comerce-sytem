import React from 'react';
import AppHeader from '../components/buyer/AppHeader';
import BottomTabBar, { type BuyerTab } from '../components/buyer/BottomTabBar';
import Footer from '../components/buyer/Footer';
import RoutePlaceholder from '../components/shared/RoutePlaceholder';
import type { RouteDefinition } from '../routes/types';
import { buyerRoutes } from '../routes/buyer';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

// Buyer Storefront Pages (Stage 1)
import HomePage from '../pages/buyer/HomePage';
import CategoriesPage from '../pages/buyer/CategoriesPage';
import SearchPage from '../pages/buyer/SearchPage';
import ProductDetailPage from '../pages/buyer/ProductDetailPage';
import StorePage from '../pages/buyer/StorePage';
import FollowedStoresPage from '../pages/buyer/FollowedStoresPage';
import WishlistPage from '../pages/buyer/WishlistPage';
import CartPage from '../pages/buyer/CartPage';

// Buyer Checkout & Orders Pages (Stage 2 PART A)
import CheckoutPage from '../pages/buyer/CheckoutPage';
import PickupStationChooserPage from '../pages/buyer/PickupStationChooserPage';
import DeliveryAddressesPage from '../pages/buyer/DeliveryAddressesPage';
import PaymentMethodsPage from '../pages/buyer/PaymentMethodsPage';
import PaymentWaitingPage from '../pages/buyer/PaymentWaitingPage';
import OrderConfirmationPage from '../pages/buyer/OrderConfirmationPage';
import MyOrdersPage from '../pages/buyer/MyOrdersPage';
import OrderDetailPage from '../pages/buyer/OrderDetailPage';
import OrderTrackingPage from '../pages/buyer/OrderTrackingPage';
import OrderDeliveredPage from '../pages/buyer/OrderDeliveredPage';
import ReturnsDisputesPage from '../pages/buyer/ReturnsDisputesPage';
import ScanQrHandoverPage from '../pages/buyer/ScanQrHandoverPage';

// Buyer Auth & Account Pages (Stage 2 PART B)
import SignInPage from '../pages/buyer/SignInPage';
import RegisterPage from '../pages/buyer/RegisterPage';
import ForgotPasswordPage from '../pages/buyer/ForgotPasswordPage';
import PhoneVerificationPage from '../pages/buyer/PhoneVerificationPage';
import AccountPage from '../pages/buyer/AccountPage';
import VouchersPage from '../pages/buyer/VouchersPage';
import NotificationsPage from '../pages/buyer/NotificationsPage';
import HelpCentrePage from '../pages/buyer/HelpCentrePage';
import TermsPrivacyPage from '../pages/buyer/TermsPrivacyPage';
import SplashPage from '../pages/buyer/SplashPage';
import BecomeSellerPage from '../pages/buyer/BecomeSellerPage';
import SellerApplicationStatusPage from '../pages/buyer/SellerApplicationStatusPage';
import EmptyErrorSuitePage from '../pages/buyer/EmptyErrorSuitePage';

export interface BuyerViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const BuyerView: React.FC<BuyerViewProps> = ({ route, onNavigate }) => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  // Extract query params if present in window.location.search
  const searchParams = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const productIdParam = searchParams.get('id') || undefined;
  const sellerIdParam = searchParams.get('sellerId') || undefined;
  const searchQueryParam = searchParams.get('q') || undefined;
  const categoryParam = searchParams.get('cat') || undefined;

  // Map current route to tab if applicable
  let currentTab: BuyerTab = 'home';
  if (route.path === '/categories' || route.path.includes('categories')) {
    currentTab = 'categories';
  } else if (route.path.startsWith('/cart')) {
    currentTab = 'cart';
  } else if (route.path.startsWith('/wishlist')) {
    currentTab = 'wishlist';
  } else if (route.path.startsWith('/account')) {
    currentTab = 'account';
  }

  const handleTabChange = (tab: BuyerTab) => {
    switch (tab) {
      case 'home':
        onNavigate('/');
        break;
      case 'categories':
        onNavigate('/categories');
        break;
      case 'cart':
        onNavigate('/cart');
        break;
      case 'wishlist':
        onNavigate('/wishlist');
        break;
      case 'account':
        onNavigate('/account');
        break;
    }
  };

  const renderActiveScreen = () => {
    const path = route.path;

    // 1. Home
    if (path === '/' || path === '/-alt' || path.startsWith('/home')) {
      return <HomePage onNavigate={onNavigate} />;
    }

    // 2. Categories
    if (
      path === '/categories' ||
      path.startsWith('/categories-mega') ||
      path === '/search-categories'
    ) {
      return <CategoriesPage onNavigate={onNavigate} />;
    }

    // 3. Search & Results
    if (
      path === '/search' ||
      path === '/search-experience' ||
      path.startsWith('/search-results')
    ) {
      return (
        <SearchPage
          initialQuery={searchQueryParam}
          initialCategory={categoryParam}
          onNavigate={onNavigate}
        />
      );
    }

    // 4. Product Detail
    if (path.startsWith('/product-detail') || path.startsWith('/product')) {
      return (
        <ProductDetailPage
          productId={productIdParam}
          onNavigate={onNavigate}
        />
      );
    }

    // 5. Store Page
    if (path.startsWith('/store-page') || path.startsWith('/store')) {
      return (
        <StorePage
          sellerId={sellerIdParam}
          onNavigate={onNavigate}
        />
      );
    }

    // 6. Followed Stores
    if (path.startsWith('/followed-stores')) {
      return <FollowedStoresPage onNavigate={onNavigate} />;
    }

    // 7. Wishlist
    if (path.startsWith('/wishlist')) {
      return <WishlistPage onNavigate={onNavigate} />;
    }

    // 8. Cart
    if (path.startsWith('/cart')) {
      return <CartPage onNavigate={onNavigate} />;
    }

    // 9. Checkout Flow
    if (path.startsWith('/checkout-step') || path === '/checkout') {
      return <CheckoutPage onNavigate={onNavigate} />;
    }

    // 10. Pickup Station Chooser
    if (path.startsWith('/pickup-station')) {
      return <PickupStationChooserPage onNavigate={onNavigate} />;
    }

    // 11. Delivery Addresses
    if (path.startsWith('/delivery-addresses')) {
      return <DeliveryAddressesPage onNavigate={onNavigate} />;
    }

    // 12. Payment Methods & Add Mobile Money Sheet
    if (path.startsWith('/payment-methods') || path === '/add-money-bottom-sheet') {
      return <PaymentMethodsPage onNavigate={onNavigate} />;
    }

    // 13. Payment Waiting / USSD PIN Prompt
    if (
      path === '/checkout-one-flow-payment-waiting' ||
      path.startsWith('/mtn-momo-ussd')
    ) {
      return <PaymentWaitingPage onNavigate={onNavigate} />;
    }

    // 14. Order Confirmation & Delivery Handover Code
    if (
      path === '/order-confirmation-delivery-code' ||
      path === '/checkout-delivery-code'
    ) {
      return <OrderConfirmationPage onNavigate={onNavigate} />;
    }

    // 15. My Orders List
    if (path === '/my-orders') {
      return <MyOrdersPage onNavigate={onNavigate} />;
    }

    // 16. Order Detail
    if (path === '/my-orders-order-detail') {
      return <OrderDetailPage onNavigate={onNavigate} />;
    }

    // 17. Order Tracking & Live Boda Map
    if (
      path.startsWith('/order-tracking') ||
      path.startsWith('/live-rider-tracking') ||
      path.startsWith('/live-boda-rider')
    ) {
      return <OrderTrackingPage onNavigate={onNavigate} />;
    }

    // 18. Order Delivered & Review Modal
    if (path.startsWith('/order-delivered')) {
      return <OrderDeliveredPage onNavigate={onNavigate} />;
    }

    // 19. Returns & Escrow Disputes
    if (
      path === '/returns-disputes' ||
      path === '/escrow-dispute-return-request' ||
      path === '/dispute-evidence-form' ||
      path === '/submit-dispute-photos'
    ) {
      return <ReturnsDisputesPage onNavigate={onNavigate} />;
    }

    // 20. Scan QR Handover
    if (path === '/scan-qr-handover') {
      return <ScanQrHandoverPage onNavigate={onNavigate} />;
    }

    // 21. Auth: Sign In
    if (
      path === '/sign-in-buyer' ||
      path === '/sign-in-register' ||
      path === '/sign-in-1' ||
      path === '/sign-in-2'
    ) {
      return <SignInPage onNavigate={onNavigate} />;
    }

    // 22. Auth: Register
    if (path === '/register-buyer' || path === '/register-2') {
      return <RegisterPage onNavigate={onNavigate} />;
    }

    // 23. Auth: Forgot Password
    if (path === '/forgot-password-buyer') {
      return <ForgotPasswordPage onNavigate={onNavigate} />;
    }

    // 24. Auth: Phone Verification
    if (
      path.startsWith('/phone-verification')
    ) {
      return <PhoneVerificationPage onNavigate={onNavigate} />;
    }

    // 25. Account Profile
    if (path === '/account' || path === '/buyer-account-profile') {
      return <AccountPage onNavigate={onNavigate} />;
    }

    // 26. Vouchers
    if (path === '/vouchers-discounts') {
      return <VouchersPage onNavigate={onNavigate} />;
    }

    // 27. Notifications
    if (
      path === '/notifications' ||
      path === '/notifications-buyer' ||
      path === '/messages-notifications'
    ) {
      return <NotificationsPage onNavigate={onNavigate} />;
    }

    // 28. Help Centre & Support
    if (path.startsWith('/help-centre')) {
      return <HelpCentrePage onNavigate={onNavigate} />;
    }

    // 29. Terms & Privacy Policy
    if (
      path === '/terms-of-service-privacy' ||
      path === '/privacy-policy-buyer' ||
      path === '/privacy-policy-terms-buyer'
    ) {
      return <TermsPrivacyPage onNavigate={onNavigate} />;
    }

    // 30. Splash / Welcome
    if (path.startsWith('/splash')) {
      return <SplashPage onNavigate={onNavigate} />;
    }

    // 31. Become a Seller (4 Steps)
    if (path === '/become-a-seller-4-steps') {
      return <BecomeSellerPage onNavigate={onNavigate} />;
    }

    // 32. Seller Application Status
    if (path === '/seller-application-status') {
      return <SellerApplicationStatusPage onNavigate={onNavigate} />;
    }

    // 33. Empty & Error States Suite
    if (path === '/empty-error-states-suite') {
      return <EmptyErrorSuitePage onNavigate={onNavigate} />;
    }

    // Fallback: ONLY for routes outside buyer scope
    return (
      <RoutePlaceholder
        route={route}
        onNavigate={onNavigate}
        siblingRoutes={buyerRoutes}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] text-[#0E1B4D] flex flex-col pb-20 md:pb-0">
      <AppHeader
        cartCount={cart.totalQuantity}
        wishlistCount={wishlist.length}
        onNavigate={onNavigate}
        onSearch={(query) => onNavigate(`/search?q=${encodeURIComponent(query)}`)}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderActiveScreen()}
      </main>

      <Footer onNavigate={onNavigate} />

      <BottomTabBar
        currentTab={currentTab}
        onTabChange={handleTabChange}
        cartCount={cart.totalQuantity}
        wishlistCount={wishlist.length}
      />
    </div>
  );
};

export default BuyerView;

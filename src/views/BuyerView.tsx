import React from 'react';
import AppHeader from '../components/buyer/AppHeader';
import BottomTabBar, { type BuyerTab } from '../components/buyer/BottomTabBar';
import Footer from '../components/buyer/Footer';
import RoutePlaceholder from '../components/shared/RoutePlaceholder';
import type { RouteDefinition } from '../routes/types';
import { buyerRoutes } from '../routes/buyer';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

// Real Buyer Storefront Pages
import HomePage from '../pages/buyer/HomePage';
import CategoriesPage from '../pages/buyer/CategoriesPage';
import SearchPage from '../pages/buyer/SearchPage';
import ProductDetailPage from '../pages/buyer/ProductDetailPage';
import StorePage from '../pages/buyer/StorePage';
import FollowedStoresPage from '../pages/buyer/FollowedStoresPage';
import WishlistPage from '../pages/buyer/WishlistPage';
import CartPage from '../pages/buyer/CartPage';

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
    if (path === '/' || path.startsWith('/home')) {
      return <HomePage onNavigate={onNavigate} />;
    }

    // 2. Categories
    if (path === '/categories' || path.startsWith('/categories-mega') || path === '/search-categories') {
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

    // Fallback: Placeholder for future stages (Checkout, Auth, Profile, etc.)
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

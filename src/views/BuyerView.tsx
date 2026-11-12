import React from 'react';
import AppHeader from '../components/buyer/AppHeader';
import BottomTabBar, { type BuyerTab } from '../components/buyer/BottomTabBar';
import Footer from '../components/buyer/Footer';
import RoutePlaceholder from '../components/shared/RoutePlaceholder';
import type { RouteDefinition } from '../routes/types';
import { buyerRoutes } from '../routes/buyer';

export interface BuyerViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const BuyerView: React.FC<BuyerViewProps> = ({ route, onNavigate }) => {
  // Map current route to tab if applicable
  let currentTab: BuyerTab = 'home';
  if (route.path === '/categories' || route.path.includes('categories')) currentTab = 'categories';
  else if (route.path === '/cart') currentTab = 'cart';
  else if (route.path === '/wishlist') currentTab = 'wishlist';
  else if (route.path === '/account') currentTab = 'account';

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

  return (
    <div className="min-h-screen bg-[#FFF8F2] text-[#0E1B4D] flex flex-col pb-20 md:pb-0">
      <AppHeader
        cartCount={2}
        wishlistCount={4}
        onNavigate={onNavigate}
        onSearch={(query) => onNavigate(`/search-experience?q=${encodeURIComponent(query)}`)}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <RoutePlaceholder
          route={route}
          onNavigate={onNavigate}
          siblingRoutes={buyerRoutes}
        />
      </main>

      <Footer onNavigate={onNavigate} />

      <BottomTabBar
        currentTab={currentTab}
        onTabChange={handleTabChange}
        cartCount={2}
        wishlistCount={4}
      />
    </div>
  );
};

export default BuyerView;


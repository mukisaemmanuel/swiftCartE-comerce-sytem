import React from 'react';

export type BuyerTab = 'home' | 'categories' | 'cart' | 'wishlist' | 'account';

export interface BottomTabBarProps {
  currentTab: BuyerTab;
  onTabChange: (tab: BuyerTab) => void;
  cartCount?: number;
  wishlistCount?: number;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  currentTab,
  onTabChange,
  cartCount = 0,
  wishlistCount = 0,
}) => {
  const tabs: { id: BuyerTab; label: string; icon: string; count?: number }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'categories', label: 'Categories', icon: 'grid_view' },
    { id: 'cart', label: 'Cart', icon: 'shopping_cart', count: cartCount },
    { id: 'wishlist', label: 'Wishlist', icon: 'favorite', count: wishlistCount },
    { id: 'account', label: 'Account', icon: 'person' },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-2 py-1 safe-area-pb"
      aria-label="Mobile Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`touch-target flex flex-col items-center justify-center flex-1 py-1 transition-colors relative min-h-[48px] ${
                isActive ? 'text-[#DA3700] font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`material-symbols-rounded text-[24px] ${
                    isActive ? 'font-bold' : ''
                  }`}
                  aria-hidden="true"
                >
                  {tab.icon}
                </span>

                {tab.count !== undefined && tab.count > 0 && (
                  <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 rounded-full text-[11px] font-bold bg-[#ED1C24] text-white min-w-[18px] text-center">
                    {tab.count > 99 ? '99+' : tab.count}
                  </span>
                )}
              </div>
              <span className="text-[12px] leading-tight mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabBar;


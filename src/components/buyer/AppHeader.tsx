import React, { useState } from 'react';
import Logo from '../brand/Logo';
import { Icon } from '../shared/Icon';

export interface AppHeaderProps {
  cartCount?: number;
  wishlistCount?: number;
  userName?: string;
  onSearch?: (query: string) => void;
  onNavigate?: (path: string) => void;
  currentCategory?: string;
}

const CATEGORIES = [
  { id: 'all', name: 'All Categories', icon: 'menu' },
  { id: 'phones', name: 'Phones & Tablets', icon: 'smartphone' },
  { id: 'electronics', name: 'Electronics & Audio', icon: 'headphones' },
  { id: 'fashion', name: 'Fashion & Wear', icon: 'apparel' },
  { id: 'appliances', name: 'Home & Kitchen', icon: 'kitchen' },
  { id: 'beauty', name: 'Health & Beauty', icon: 'spa' },
  { id: 'groceries', name: 'Supermarket & Food', icon: 'local_mall' },
  { id: 'computing', name: 'Computers & Office', icon: 'laptop' },
];

export const AppHeader: React.FC<AppHeaderProps> = ({
  cartCount = 0,
  wishlistCount = 0,
  userName,
  onSearch,
  onNavigate,
  currentCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white shadow-md">
      {/* 1. SLIM STICKY MOBILE HEADER (< 1024px, per home_swiftcart_marketplace_3) */}
      <div className="lg:hidden h-14 px-3 flex items-center justify-between gap-2.5">
        {/* Left: Brand Icon */}
        <button
          type="button"
          onClick={() => onNavigate?.('/')}
          className="touch-target flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-0.5"
          aria-label="SwiftCart Home"
        >
          <Logo variant="icon" height={32} />
        </button>

        {/* Center: Search input */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex-1 relative flex items-center"
          role="search"
        >
          <label htmlFor="mobile-search-input" className="sr-only">
            Search products in Uganda
          </label>
          <input
            id="mobile-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search phones, electronics, fashion..."
            className="w-full h-10 pl-3.5 pr-9 rounded-xl bg-white text-[#0E1B4D] placeholder-slate-400 text-[13px] font-medium shadow-inner focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-1 w-8 h-8 rounded-lg text-slate-500 hover:text-[#0E1B4D] flex items-center justify-center transition-colors"
            aria-label="Submit Search"
          >
            <Icon name="search" className="text-[20px]" aria-hidden="true" />
          </button>
        </form>

        {/* Right: Cart Button with live badge */}
        <button
          type="button"
          onClick={() => onNavigate?.('/cart')}
          className="touch-target relative w-11 h-11 flex items-center justify-center rounded-xl hover:bg-white/15 transition-colors text-white shrink-0"
          aria-label={`Shopping cart with ${cartCount} items`}
        >
          <Icon name="shopping_cart" className="text-[24px]" aria-hidden="true" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold bg-[#0E1B4D] text-white min-w-[18px] text-center shadow-xs">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* 2. FULL DESKTOP HEADER (>= 1024px) */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => onNavigate?.('/')}
            className="touch-target flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1"
            aria-label="SwiftCart Home"
          >
            <Logo variant="white" height={36} />
          </button>

          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-2xl relative flex items-center"
            role="search"
          >
            <label htmlFor="buyer-search-input" className="sr-only">
              Search products, brands and categories in Uganda
            </label>
            <input
              id="buyer-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search authentic electronics, fashion, food and home essentials..."
              className="w-full h-11 pl-4 pr-12 rounded-xl bg-white text-[#0E1B4D] placeholder-slate-400 text-[14px] font-medium shadow-inner focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="touch-target absolute right-1 h-9 w-10 rounded-lg bg-[#0E1B4D] hover:bg-[#1E2B58] text-white flex items-center justify-center transition-colors"
              aria-label="Submit Search"
            >
              <Icon name="search" className="text-[20px]" aria-hidden="true" />
            </button>
          </form>

          {/* Actions (Wishlist, Cart, Account) */}
          <div className="flex items-center gap-2">
            {/* Wishlist */}
            <button
              type="button"
              onClick={() => onNavigate?.('/wishlist')}
              className="touch-target flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors relative text-white"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Icon name="favorite" className="text-[24px]" aria-hidden="true" />
              <span className="text-[14px] font-medium">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full text-[11px] font-bold bg-[#0E1B4D] text-white min-w-[18px] text-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              type="button"
              onClick={() => onNavigate?.('/cart')}
              className="touch-target flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors relative text-white"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <Icon name="shopping_cart" className="text-[24px]" aria-hidden="true" />
              <span className="text-[14px] font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full text-[11px] font-bold bg-[#0E1B4D] text-white min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Account */}
            <button
              type="button"
              onClick={() => onNavigate?.('/account')}
              className="touch-target flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors text-white"
              aria-label={userName ? `Account of ${userName}` : 'Sign in to account'}
            >
              <Icon name="account_circle" className="text-[24px]" aria-hidden="true" />
              <span className="text-[14px] font-medium max-w-[110px] truncate">
                {userName || 'Account'}
              </span>
            </button>
          </div>
        </div>

        {/* Category Row (Desktop only) */}
        <nav
          className="bg-[#0E1B4D] text-white text-[14px] border-t border-white/10"
          aria-label="Categories"
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 overflow-x-auto relative">
            {/* All Categories Hover Button */}
            <div
              className="relative"
              onMouseEnter={() => setShowAllCategories(true)}
              onMouseLeave={() => setShowAllCategories(false)}
            >
              <button
                type="button"
                onClick={() => onNavigate?.('/categories')}
                className="touch-target flex items-center gap-2 px-4 py-2 font-bold bg-[#FF8A1F] text-white hover:bg-[#E66A00] transition-colors rounded-none"
                aria-expanded={showAllCategories}
                aria-haspopup="true"
              >
                <Icon name="menu" className="text-[20px]" aria-hidden="true" />
                <span>All Categories</span>
                <Icon name="arrow_drop_down" className="text-[18px]" aria-hidden="true" />
              </button>

              {/* Hover Mega Panel */}
              {showAllCategories && (
                <div
                  className="absolute top-full left-0 w-72 bg-white text-[#0E1B4D] shadow-2xl rounded-b-2xl border border-slate-200 py-2 z-50 animate-fadeIn"
                  role="menu"
                >
                  {CATEGORIES.slice(1).map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setShowAllCategories(false);
                        onNavigate?.(`/search?cat=${cat.id}`);
                      }}
                      className="touch-target w-full px-4 py-2.5 text-left text-[14px] hover:bg-orange-50 hover:text-[#DA3700] flex items-center gap-3 transition-colors"
                    >
                      <Icon name={cat.icon} className="text-[20px] text-slate-400" aria-hidden="true" />
                      <span className="font-medium">{cat.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Top Categories Row Items */}
            {CATEGORIES.slice(1, 7).map((cat) => {
              const isActive = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onNavigate?.(`/search?cat=${cat.id}`)}
                  className={`touch-target px-3.5 py-2 text-[14px] font-medium transition-colors hover:text-[#FF8A1F] whitespace-nowrap flex items-center gap-1.5 ${
                    isActive ? 'text-[#FF8A1F] border-b-2 border-[#FF8A1F]' : 'text-white/90'
                  }`}
                >
                  <Icon name={cat.icon} className="text-[18px] opacity-75" aria-hidden="true" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;

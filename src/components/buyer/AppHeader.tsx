import React, { useState } from 'react';
import Logo from '../brand/Logo';

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
      {/* Top Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3 md:gap-6">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => onNavigate?.('/')}
          className="touch-target flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1"
          aria-label="SwiftCart Home"
        >
          <Logo variant="white" height={34} />
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
            placeholder="Search phones, electronics, fashion in Uganda..."
            className="w-full h-11 pl-4 pr-12 rounded-xl bg-white text-[#0E1B4D] placeholder-slate-400 text-[14px] font-medium shadow-inner focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="touch-target absolute right-1 h-9 w-10 rounded-lg bg-[#0E1B4D] hover:bg-[#1E2B58] text-white flex items-center justify-center transition-colors"
            aria-label="Submit Search"
          >
            <span className="material-symbols-rounded text-[20px]" aria-hidden="true">
              search
            </span>
          </button>
        </form>

        {/* Actions (Wishlist, Cart, Account) */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Wishlist (Tablet / Desktop) */}
          <button
            type="button"
            onClick={() => onNavigate?.('/wishlist')}
            className="touch-target hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors relative text-white"
            aria-label={`Wishlist with ${wishlistCount} items`}
          >
            <span className="material-symbols-rounded text-[24px]" aria-hidden="true">
              favorite
            </span>
            <span className="hidden lg:inline text-[14px] font-medium">Wishlist</span>
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
            className="touch-target flex items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-white/15 transition-colors relative text-white"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <span className="material-symbols-rounded text-[24px]" aria-hidden="true">
              shopping_cart
            </span>
            <span className="hidden lg:inline text-[14px] font-medium">Cart</span>
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
            <span className="material-symbols-rounded text-[24px]" aria-hidden="true">
              account_circle
            </span>
            <span className="hidden md:inline text-[14px] font-medium max-w-[110px] truncate">
              {userName || 'Account'}
            </span>
          </button>
        </div>
      </div>

      {/* Category Row (Hidden on mobile, visible tablet & desktop) */}
      <nav
        className="hidden md:block bg-[#0E1B4D] text-white text-[14px] border-t border-white/10"
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
              <span className="material-symbols-rounded text-[20px]" aria-hidden="true">
                menu
              </span>
              <span>All Categories</span>
              <span className="material-symbols-rounded text-[18px]" aria-hidden="true">
                expand_more
              </span>
            </button>

            {/* "All Categories" Hover Panel (Desktop) */}
            {showAllCategories && (
              <div
                className="absolute top-full left-0 w-64 bg-white text-[#0E1B4D] shadow-xl rounded-b-xl border border-slate-200 py-2 z-50 animate-fadeIn"
                role="menu"
              >
                {CATEGORIES.slice(1).map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setShowAllCategories(false);
                      onNavigate?.(`/category/${cat.id}`);
                    }}
                    className="touch-target w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-orange-50 text-[14px] font-medium transition-colors"
                    role="menuitem"
                  >
                    <span className="material-symbols-rounded text-[20px] text-[#FF8A1F]">
                      {cat.icon}
                    </span>
                    <span className="truncate">{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Category Links */}
          <div className="flex items-center gap-1 flex-1 overflow-x-auto py-1 scrollbar-none">
            {CATEGORIES.slice(1).map((cat) => {
              const isSelected = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onNavigate?.(`/category/${cat.id}`)}
                  className={`touch-target px-3 py-1.5 rounded-lg whitespace-nowrap text-[14px] font-medium transition-colors ${
                    isSelected
                      ? 'bg-white/20 text-[#FF8A1F] font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;


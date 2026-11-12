import React, { useState } from 'react';

export interface EmptyErrorSuitePageProps {
  onNavigate: (path: string) => void;
}

type StateKey = 'empty_cart' | 'empty_search' | 'not_found' | 'offline' | 'payment_failed';

export const EmptyErrorSuitePage: React.FC<EmptyErrorSuitePageProps> = ({ onNavigate }) => {
  const [activeState, setActiveState] = useState<StateKey>('empty_cart');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Back"
          >
            <span className="material-symbols-rounded">arrow_back</span>
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D]">
              Empty & Error States Suite
            </h1>
            <p className="text-sm text-slate-500">
              Interactive preview of all edge case states in the buyer application
            </p>
          </div>
        </div>
      </div>

      {/* Switcher Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {[
          { key: 'empty_cart', label: 'Empty Cart' },
          { key: 'empty_search', label: 'No Search Results' },
          { key: 'not_found', label: '404 Page Not Found' },
          { key: 'offline', label: 'Network Offline' },
          { key: 'payment_failed', label: 'Payment Failed' },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveState(item.key as StateKey)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeState === item.key
                ? 'bg-[#0E1B4D] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* State Preview Frame */}
      <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200 shadow-md min-h-[400px] flex items-center justify-center text-center">
        {/* 1. Empty Cart */}
        {activeState === 'empty_cart' && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-20 h-20 rounded-full bg-orange-100 text-[#FF8A1F] flex items-center justify-center mx-auto shadow-sm">
              <span className="material-symbols-rounded text-4xl">remove_shopping_cart</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0E1B4D]">Your Cart is Empty</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Looks like you haven't added any products to your shopping cart yet. Browse verified Kampala merchants to find great deals!
            </p>
            <button
              onClick={() => onNavigate('/')}
              className="mt-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm shadow-md"
            >
              Start Shopping
            </button>
          </div>
        )}

        {/* 2. Empty Search */}
        {activeState === 'empty_search' && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-20 h-20 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <span className="material-symbols-rounded text-4xl">search_off</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0E1B4D]">No Products Found</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              We couldn't find any items matching your query. Try checking your spelling or searching for broader categories like "phones" or "headphones".
            </p>
            <button
              onClick={() => onNavigate('/search')}
              className="mt-2 px-6 py-3.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-sm"
            >
              Clear Filters & Search Again
            </button>
          </div>
        )}

        {/* 3. 404 Not Found */}
        {activeState === 'not_found' && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="text-7xl font-black text-[#FF8A1F] tracking-wider">
              404
            </div>
            <h2 className="text-2xl font-extrabold text-[#0E1B4D]">Page Not Found</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              The page you are looking for might have been moved, deleted or does not exist.
            </p>
            <button
              onClick={() => onNavigate('/')}
              className="mt-2 px-6 py-3.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-sm"
            >
              Back to Home
            </button>
          </div>
        )}

        {/* 4. Offline Banner */}
        {activeState === 'offline' && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-20 h-20 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <span className="material-symbols-rounded text-4xl">wifi_off</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0E1B4D]">You're Offline</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Unable to reach SwiftCart servers. Please check your data connection or Wi-Fi signal in Uganda and try again.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-semibold">
              Pending orders and cart items are safely preserved in offline storage.
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-6 py-3.5 rounded-xl bg-[#0E1B4D] text-white font-bold text-sm"
            >
              Retry Connection
            </button>
          </div>
        )}

        {/* 5. Payment Failed */}
        {activeState === 'payment_failed' && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <span className="material-symbols-rounded text-4xl">cancel</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0E1B4D]">Payment Failed</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Your Mobile Money transaction could not be completed (timeout or insufficient balance). No funds were deducted.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => onNavigate('/checkout-step-by-step-flow')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A1F] to-[#DA3700] text-white font-bold text-sm shadow-md"
              >
                Retry Checkout
              </button>
              <button
                onClick={() => onNavigate('/help-centre-support')}
                className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50"
              >
                Contact Support
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyErrorSuitePage;


import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { CartProvider } from '../src/context/CartContext';
import { formatUGX } from '../src/components/buyer/PriceUGX';
import {
  calculateCartTotals,
  groupCartBySeller,
} from '../src/data/cart.repository';
import type { CartItem, Voucher } from '../src/domain/types';

// Storefront Pages
import HomePage from '../src/legacy/buyer/HomePage';
import CategoriesPage from '../src/legacy/buyer/CategoriesPage';
import SearchPage from '../src/legacy/buyer/SearchPage';
import ProductDetailPage from '../src/legacy/buyer/ProductDetailPage';
import StorePage from '../src/legacy/buyer/StorePage';
import FollowedStoresPage from '../src/legacy/buyer/FollowedStoresPage';
import WishlistPage from '../src/legacy/buyer/WishlistPage';
import CartPage from '../src/legacy/buyer/CartPage';

describe('Stage 1 Quality Gate: Buyer Domain, Totals & Seller Grouping', () => {
  const sampleItems: CartItem[] = [
    {
      id: 'item-1',
      productId: 'prod-1',
      productTitle: 'Soundcore Space One',
      productImage: '/placeholders/headphones.svg',
      sellerId: 'seller-soundcore',
      sellerName: 'Soundcore Uganda',
      price: 380000,
      quantity: 1,
      maxStock: 10,
    },
    {
      id: 'item-2',
      productId: 'prod-2',
      productTitle: 'USB-C Cable',
      productImage: '/placeholders/headphones.svg',
      sellerId: 'seller-soundcore',
      sellerName: 'Soundcore Uganda',
      price: 25000,
      quantity: 2,
      maxStock: 20,
    },
    {
      id: 'item-3',
      productId: 'prod-3',
      productTitle: 'Organic Nile Honey',
      productImage: '/placeholders/groceries.svg',
      sellerId: 'seller-entebbe',
      sellerName: 'Entebbe Bay Organics',
      price: 32000,
      quantity: 1,
      maxStock: 50,
    },
    {
      id: 'item-saved',
      productId: 'prod-4',
      productTitle: 'Saved Item',
      productImage: '/placeholders/product.svg',
      sellerId: 'seller-entebbe',
      sellerName: 'Entebbe Bay Organics',
      price: 90000,
      quantity: 1,
      maxStock: 5,
      savedForLater: true,
    },
  ];

  it('formats UGX with comma separators and no decimals', () => {
    expect(formatUGX(0)).toBe('0');
    expect(formatUGX(500)).toBe('500');
    expect(formatUGX(15000)).toBe('15,000');
    expect(formatUGX(380000)).toBe('380,000');
    expect(formatUGX(12500000)).toBe('12,500,000');
  });

  it('groups cart items by seller correctly and ignores saved-for-later items', () => {
    const groups = groupCartBySeller(sampleItems);
    expect(groups).toHaveLength(2);

    const soundcoreGroup = groups.find((g) => g.sellerId === 'seller-soundcore');
    expect(soundcoreGroup).toBeDefined();
    expect(soundcoreGroup?.items).toHaveLength(2);
    // Subtotal: 380,000 * 1 + 25,000 * 2 = 430,000
    expect(soundcoreGroup?.subtotal).toBe(430000);

    const entebbeGroup = groups.find((g) => g.sellerId === 'seller-entebbe');
    expect(entebbeGroup).toBeDefined();
    expect(entebbeGroup?.items).toHaveLength(1);
    expect(entebbeGroup?.subtotal).toBe(32000);
  });

  it('calculates cart totals with multi-vendor boda delivery fee', () => {
    const cart = calculateCartTotals(sampleItems);

    // Active items: 1 + 2 + 1 = 4 totalQuantity
    expect(cart.totalQuantity).toBe(4);

    // Subtotal: 430,000 + 32,000 = 462,000
    expect(cart.subtotal).toBe(462000);

    // 2 vendors * UGX 5,000 = UGX 10,000 delivery fee
    expect(cart.estimatedShipping).toBe(10000);

    // No voucher
    expect(cart.discountAmount).toBe(0);

    // Total: 462,000 + 10,000 = 472,000
    expect(cart.total).toBe(472000);
  });

  it('applies percentage voucher with maximum cap accurately', () => {
    const voucher: Voucher = {
      code: 'SWIFT10',
      discountType: 'percentage',
      discountValue: 10, // 10% of 462,000 = 46,200
      maxDiscount: 40000, // Capped at 40,000
      expiryDate: '2026-12-31',
    };

    const cart = calculateCartTotals(sampleItems, voucher);
    expect(cart.discountAmount).toBe(40000);
    // Total: 462,000 + 10,000 - 40,000 = 432,000
    expect(cart.total).toBe(432000);
  });

  it('applies fixed-value voucher accurately', () => {
    const voucher: Voucher = {
      code: 'FREESHIP',
      discountType: 'fixed',
      discountValue: 5000,
      expiryDate: '2026-12-31',
    };

    const cart = calculateCartTotals(sampleItems, voucher);
    expect(cart.discountAmount).toBe(5000);
    // Total: 462,000 + 10,000 - 5,000 = 467,000
    expect(cart.total).toBe(467000);
  });

  it('handles empty cart without negative totals or fees', () => {
    const emptyCart = calculateCartTotals([]);
    expect(emptyCart.totalQuantity).toBe(0);
    expect(emptyCart.subtotal).toBe(0);
    expect(emptyCart.estimatedShipping).toBe(0);
    expect(emptyCart.total).toBe(0);
  });
});

describe('Stage 1 Quality Gate: Storefront Screen Render Tests', () => {
  const dummyNavigate = vi.fn();

  it('renders HomePage cleanly with hero banners and sections', async () => {
    render(
      <CartProvider>
        <HomePage onNavigate={dummyNavigate} />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Featured Ugandan Vendors/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
  });

  it('renders CategoriesPage cleanly with category list and directory', async () => {
    render(
      <CartProvider>
        <CategoriesPage onNavigate={dummyNavigate} />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Explore All Categories/i)).toBeInTheDocument();
    });
    expect(screen.getAllByText(/Phones & Tablets/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders SearchPage cleanly with filter controls and search results', async () => {
    render(
      <CartProvider>
        <SearchPage onNavigate={dummyNavigate} initialQuery="headphones" />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Search verified Ugandan products/i)).toBeInTheDocument();
    });
  });

  it('renders ProductDetailPage with title, price and verified seller card', async () => {
    render(
      <CartProvider>
        <ProductDetailPage
          productId="prod-soundcore-space-one"
          onNavigate={dummyNavigate}
        />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Soundcore Space One/i).length).toBeGreaterThanOrEqual(1);
    });
    expect(screen.getByText(/Boda Delivery/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Your payment is held safely by SwiftCart until you confirm delivery/i)
    ).toBeInTheDocument();
  });

  it('renders StorePage with store header, verified badge and products', async () => {
    render(
      <CartProvider>
        <StorePage
          sellerId="seller-soundcore"
          onNavigate={dummyNavigate}
        />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Soundcore Uganda Flagship/i).length).toBeGreaterThanOrEqual(1);
    });
    expect(screen.getAllByText(/Verified/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders FollowedStoresPage cleanly with store cards and follow status', async () => {
    render(
      <CartProvider>
        <FollowedStoresPage onNavigate={dummyNavigate} />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Followed Stores/i)).toBeInTheDocument();
    });
  });

  it('renders WishlistPage cleanly with saved products and move to cart action', async () => {
    render(
      <CartProvider>
        <WishlistPage onNavigate={dummyNavigate} />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/My Saved Wishlist/i)).toBeInTheDocument();
    });
  });

  it('renders CartPage cleanly with grouped seller cards and payment protection copy', async () => {
    render(
      <CartProvider>
        <CartPage onNavigate={dummyNavigate} />
      </CartProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Shopping Cart/i)).toBeInTheDocument();
    });

    // Check mandatory payment protection copy from docs/BUILD-RULES.md (may appear in banner and order summary)
    expect(
      screen.getAllByText(/Your payment is held safely by SwiftCart until you confirm delivery\./i).length
    ).toBeGreaterThanOrEqual(1);
  });
});

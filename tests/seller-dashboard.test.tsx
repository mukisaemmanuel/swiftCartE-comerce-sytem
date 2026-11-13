import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { SellerView } from '../src/views/SellerView';
import { SellerOrdersPage } from '../src/pages/seller/SellerOrdersPage';
import { SellerWalletPage } from '../src/pages/seller/SellerWalletPage';
import { SellerAddProductPage } from '../src/pages/seller/SellerAddProductPage';
import { sellerRoutes } from '../src/routes/seller';
import { ThemeProvider } from '../src/context/ThemeContext';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('Seller Dashboard Tests', () => {
  it('every seller route renders a real component without RoutePlaceholder', () => {
    const dummyNavigate = vi.fn();

    for (const route of sellerRoutes) {
      const { unmount } = renderWithTheme(
        <SellerView route={route} onNavigate={dummyNavigate} />
      );

      // Verify RoutePlaceholder is NOT in the document
      expect(screen.queryByText(/Route Under Construction/i)).toBeNull();
      expect(screen.queryByText(/Design Artifact Reference/i)).toBeNull();

      unmount();
    }
  });

  it('seller order action buttons follow status correctly', async () => {
    const dummyNavigate = vi.fn();
    renderWithTheme(<SellerOrdersPage onNavigate={dummyNavigate} />);

    // Click on the first order (SWIFT-UG-8901 - CONFIRMED)
    const orderCard = await screen.findByText('SWIFT-UG-8901');
    fireEvent.click(orderCard);

    // CONFIRMED order must have "Mark Processing" and "Cancel Order"
    expect(screen.getByText('Mark Processing')).toBeDefined();
    expect(screen.getByText('Cancel Order')).toBeDefined();
  });

  it('payout withdraw cannot exceed available balance', async () => {
    const dummyNavigate = vi.fn();
    renderWithTheme(<SellerWalletPage onNavigate={dummyNavigate} />);

    // Open withdraw modal (wait for async loading to finish)
    const withdrawBtn = await screen.findByRole('button', { name: /Withdraw to Mobile Money/i });
    fireEvent.click(withdrawBtn);

    // Find amount input
    const amountInput = screen.getByLabelText(/Amount \(UGX\)/i);
    // Enter an amount higher than available balance (e.g. 99,000,000 UGX)
    fireEvent.change(amountInput, { target: { value: '99000000' } });

    // Click Review Withdrawal
    const reviewBtn = screen.getByRole('button', { name: /Review Withdrawal/i });
    fireEvent.click(reviewBtn);

    // Must show validation error and NOT open confirmation dialog
    expect(await screen.findByText(/cannot exceed your available wallet balance/i)).toBeDefined();
    expect(screen.queryByText(/Confirm Mobile Money Payout/i)).toBeNull();
  });

  it('AI helper unconfirmed fields block Continue button in Step 3', async () => {
    const dummyNavigate = vi.fn();
    renderWithTheme(<SellerAddProductPage onNavigate={dummyNavigate} initialStep={3} />);

    const continueBtn = screen.getByRole('button', { name: /Continue to Catalog Details/i }) as HTMLButtonElement;

    // Initially disabled because 3 "Please confirm" fields are not checked
    expect(continueBtn.disabled).toBe(true);

    // Find all checkboxes in the "Please confirm" box
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(3);

    // Check 1st and 2nd
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);
    expect(continueBtn.disabled).toBe(true);

    // Check 3rd
    fireEvent.click(checkboxes[2]);
    // Now should be enabled!
    expect(continueBtn.disabled).toBe(false);
  });

  it('product submission requires the accuracy confirmation checkbox in Step 5', async () => {
    const dummyNavigate = vi.fn();
    renderWithTheme(<SellerAddProductPage onNavigate={dummyNavigate} initialStep={5} />);

    const submitBtn = screen.getByRole('button', { name: /Submit for Review/i }) as HTMLButtonElement;

    // Disabled initially without accuracy confirmation
    expect(submitBtn.disabled).toBe(true);

    // Find accuracy checkbox
    const accuracyCheckbox = screen.getByRole('checkbox');
    fireEvent.click(accuracyCheckbox);

    // Now should be enabled!
    expect(submitBtn.disabled).toBe(false);
  });
});

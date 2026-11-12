import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MockOrdersRepository } from '../src/data/orders.repository';
import CheckoutPage from '../src/pages/buyer/CheckoutPage';
import OrderConfirmationPage from '../src/pages/buyer/OrderConfirmationPage';
import OrderDetailPage from '../src/pages/buyer/OrderDetailPage';
import OrderTrackingPage from '../src/pages/buyer/OrderTrackingPage';
import MyOrdersPage from '../src/pages/buyer/MyOrdersPage';
import { CartProvider } from '../src/context/CartContext';
import { DELIVERY_OTP_LENGTH } from '../shared/constants';

describe('Stage 2: Checkout & Orders', () => {
  it('ordersRepository.createOrder enforces idempotency key without duplicate creation', async () => {
    const repo = new MockOrdersRepository();
    const idempotencyKey = 'test-idemp-12345';

    const order1 = await repo.createOrder({
      subtotal: 380000,
      total: 385000,
      idempotencyKey,
    });

    const order2 = await repo.createOrder({
      subtotal: 380000,
      total: 385000,
      idempotencyKey,
    });

    // Both calls must return the identical order instance
    expect(order1.id).toBe(order2.id);
    expect(order1.orderNumber).toBe(order2.orderNumber);
    expect(order1.handoverCode).toBe(order2.handoverCode);

    // Repository list count should only have increased by 1
    const all = await repo.getOrders();
    const matches = all.filter((o) => o.idempotencyKey === idempotencyKey);
    expect(matches.length).toBe(1);
  });

  it('renders CheckoutPage with delivery methods and escrow protection', () => {
    render(
      <CartProvider>
        <CheckoutPage onNavigate={vi.fn()} />
      </CartProvider>
    );

    expect(screen.getByRole('heading', { name: /Checkout/i })).toBeDefined();
    expect(screen.getAllByText(/Express Boda/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Pickup Station/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/MTN MoMo/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Airtel Money/i).length).toBeGreaterThanOrEqual(1);

    // Payment protection copy
    const protectionTexts = screen.getAllByText(
      /Your payment is held safely by SwiftCart until you confirm delivery/i
    );
    expect(protectionTexts.length).toBeGreaterThanOrEqual(1);
  });

  it('renders OrderConfirmationPage displaying the 6-digit handover code', () => {
    render(
      <CartProvider>
        <OrderConfirmationPage onNavigate={vi.fn()} />
      </CartProvider>
    );

    expect(screen.getByRole('heading', { name: /Thank You for Your Order!/i })).toBeDefined();
    expect(screen.getByText(/Your Delivery Handover Code/i)).toBeDefined();

    // Handover code must be DELIVERY_OTP_LENGTH (6 digits)
    expect(DELIVERY_OTP_LENGTH).toBe(6);
  });

  it('renders OrderDetailPage with status timeline and action buttons', () => {
    render(
      <CartProvider>
        <OrderDetailPage onNavigate={vi.fn()} />
      </CartProvider>
    );

    expect(screen.getByText(/Order Journey/i)).toBeDefined();
    expect(screen.getByText(/Delivery Handover Code/i)).toBeDefined();
    expect(screen.getByText(/Delivery Routing \(Kampala\)/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /Request Return \/ Refund/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /Open Escrow Dispute/i })).toBeDefined();
  });

  it('renders OrderTrackingPage with rider card and 6-digit delivery code', () => {
    render(
      <CartProvider>
        <OrderTrackingPage onNavigate={vi.fn()} />
      </CartProvider>
    );

    expect(screen.getByRole('heading', { name: /Live Order Tracking/i })).toBeDefined();
    expect(screen.getAllByText(/Kato Denis/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/UFB 214K/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Call Rider/i)).toBeDefined();
  });

  it('renders MyOrdersPage with status tabs', () => {
    render(
      <CartProvider>
        <MyOrdersPage onNavigate={vi.fn()} />
      </CartProvider>
    );

    expect(screen.getByRole('heading', { name: /My Orders/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /All Orders/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /In Progress/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /Delivered/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /Returns & Disputes/i })).toBeDefined();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from '../src/components/brand/Logo';
import PriceUGX, { formatUGX } from '../src/components/buyer/PriceUGX';
import StarRating from '../src/components/buyer/StarRating';
import VerifiedBadge from '../src/components/buyer/VerifiedBadge';
import ProductCard from '../src/components/buyer/ProductCard';
import BottomTabBar from '../src/components/buyer/BottomTabBar';
import KpiCard from '../src/components/shared/KpiCard';
import StatusChip from '../src/components/shared/StatusChip';
import DataTable from '../src/components/shared/DataTable';
import SixDigitCodeInput from '../src/components/shared/SixDigitCodeInput';
import EmptyState from '../src/components/shared/EmptyState';
import OfflineBanner from '../src/components/shared/OfflineBanner';

describe('Quality Gate: Shared Components Smoke Tests', () => {
  it('renders Logo variants cleanly', () => {
    const { rerender } = render(<Logo variant="full" />);
    expect(screen.getByAltText('SwiftCart Uganda')).toBeInTheDocument();

    rerender(<Logo variant="white" />);
    expect(screen.getByAltText('SwiftCart Uganda')).toBeInTheDocument();

    rerender(<Logo variant="icon" />);
    expect(screen.getByAltText('SwiftCart Uganda')).toBeInTheDocument();
  });

  it('formats Ugandan currency correctly (UGX, no decimals)', () => {
    expect(formatUGX(150000)).toBe('150,000');
    expect(formatUGX(2500)).toBe('2,500');

    render(<PriceUGX amount={150000} />);
    expect(screen.getByText('150,000')).toBeInTheDocument();
    expect(screen.getByText('UGX')).toBeInTheDocument();
  });

  it('renders StarRating with score', () => {
    render(<StarRating rating={4.8} reviewCount={42} />);
    expect(screen.getByText('4.8')).toBeInTheDocument();
    expect(screen.getByText('(42)')).toBeInTheDocument();
  });

  it('renders VerifiedBadge', () => {
    render(<VerifiedBadge label="URSB Verified" />);
    expect(screen.getByText('URSB Verified')).toBeInTheDocument();
  });

  it('renders ProductCard with title and price', () => {
    render(
      <ProductCard
        id="prod-1"
        title="Infinix Hot 40 Pro"
        price={620000}
        originalPrice={700000}
      />
    );
    expect(screen.getByText('Infinix Hot 40 Pro')).toBeInTheDocument();
    expect(screen.getByText('620,000')).toBeInTheDocument();
  });

  it('renders BottomTabBar with accessible labels', () => {
    render(<BottomTabBar currentTab="home" onTabChange={() => {}} cartCount={3} />);
    expect(screen.getByLabelText('Home')).toBeInTheDocument();
    expect(screen.getByLabelText('Cart')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders KpiCard', () => {
    render(
      <KpiCard
        title="Total Escrow Protected"
        value="UGX 45,200,000"
        change={{ value: '+12%', isPositive: true }}
      />
    );
    expect(screen.getByText('Total Escrow Protected')).toBeInTheDocument();
    expect(screen.getByText('UGX 45,200,000')).toBeInTheDocument();
    expect(screen.getByText('+12%')).toBeInTheDocument();
  });

  it('renders StatusChip', () => {
    render(<StatusChip label="Delivered" variant="success" />);
    expect(screen.getByText('Delivered')).toBeInTheDocument();
  });

  it('renders DataTable with records', () => {
    const data = [
      { id: '1', orderId: 'ORD-101', customer: 'Musisi John' },
      { id: '2', orderId: 'ORD-102', customer: 'Nakato Sarah' },
    ];
    render(
      <DataTable
        columns={[
          { key: 'orderId', header: 'Order ID' },
          { key: 'customer', header: 'Customer' },
        ]}
        data={data}
        keyExtractor={(item) => item.id}
      />
    );
    expect(screen.getByText('ORD-101')).toBeInTheDocument();
    expect(screen.getByText('Musisi John')).toBeInTheDocument();
  });

  it('renders SixDigitCodeInput with 6 empty inputs and never displays preset code', () => {
    render(<SixDigitCodeInput />);
    for (let i = 1; i <= 6; i++) {
      const input = screen.getByLabelText(`Digit ${i} of 6`) as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.value).toBe('');
    }
  });

  it('renders EmptyState', () => {
    render(
      <EmptyState
        title="No Orders Yet"
        description="Orders will appear here once customers place them."
      />
    );
    expect(screen.getByText('No Orders Yet')).toBeInTheDocument();
  });

  it('renders OfflineBanner when offline', () => {
    render(<OfflineBanner />);
  });
});

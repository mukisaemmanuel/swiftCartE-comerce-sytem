import React from 'react';
import DashboardShell from '../components/dashboard/DashboardShell';
import type { RouteDefinition } from '../routes/types';

import SellerOverviewPage from '../pages/seller/SellerOverviewPage';
import SellerOrdersPage from '../pages/seller/SellerOrdersPage';
import SellerProductsPage from '../pages/seller/SellerProductsPage';
import SellerAddProductPage from '../pages/seller/SellerAddProductPage';
import SellerRidersPage from '../pages/seller/SellerRidersPage';
import SellerReturnsPage from '../pages/seller/SellerReturnsPage';
import SellerWalletPage from '../pages/seller/SellerWalletPage';
import SellerAnalyticsPage from '../pages/seller/SellerAnalyticsPage';
import SellerDiscountsPage from '../pages/seller/SellerDiscountsPage';
import SellerProfileKycPage from '../pages/seller/SellerProfileKycPage';
import SellerNotificationsPage from '../pages/seller/SellerNotificationsPage';

export interface SellerViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const SellerView: React.FC<SellerViewProps> = ({ route, onNavigate }) => {
  const p = route.path;

  const renderContent = () => {
    // 1. Overview
    if (
      p === '/seller' ||
      p === '/seller/overview' ||
      p === '/seller/overview-seller' ||
      p === '/seller/seller-overview' ||
      p === '/seller/seller-overview-dashboard' ||
      p === '/seller/seller-overview-dashboard-1' ||
      p === '/seller/seller-overview-dashboard-2'
    ) {
      return <SellerOverviewPage onNavigate={onNavigate} />;
    }

    // 2. Orders
    if (
      p === '/seller/orders' ||
      p === '/seller/orders-seller' ||
      p === '/seller/seller-orders-master-detail' ||
      p === '/seller/seller-orders-master-detail-2' ||
      p === '/seller/seller-order-detail-seller' ||
      p === '/seller/assign-rider-bottom-sheet-modal-seller'
    ) {
      return <SellerOrdersPage onNavigate={onNavigate} />;
    }

    // 3. Products
    if (
      p === '/seller/products' ||
      p === '/seller/products-seller' ||
      p === '/seller/seller-products-batch-pricing' ||
      p === '/seller/seller-products-bulk-price-update'
    ) {
      return <SellerProductsPage onNavigate={onNavigate} />;
    }

    // 4. Add / Edit Product
    if (p === '/seller/add-product-step-1-photos-seller') {
      return <SellerAddProductPage onNavigate={onNavigate} initialStep={1} />;
    }
    if (
      p === '/seller/add-product-step-2-ai-photo-studio-seller' ||
      p === '/seller/seller-add-product-with-ai-studio'
    ) {
      return <SellerAddProductPage onNavigate={onNavigate} initialStep={2} />;
    }
    if (p === '/seller/add-product-step-3-ai-description-seller') {
      return <SellerAddProductPage onNavigate={onNavigate} initialStep={3} />;
    }
    if (p === '/seller/add-product-step-4-catalog-details-seller') {
      return <SellerAddProductPage onNavigate={onNavigate} initialStep={4} />;
    }
    if (p === '/seller/add-product-step-5-buyer-preview-submit-seller') {
      return <SellerAddProductPage onNavigate={onNavigate} initialStep={5} />;
    }
    if (
      p === '/seller/add-product' ||
      p === '/seller/seller-add-product-5-step-ai-flow'
    ) {
      return <SellerAddProductPage onNavigate={onNavigate} initialStep={1} />;
    }
    if (
      p === '/seller/edit-existing-product-seller' ||
      p === '/seller/seller-edit-product-with-ai-studio' ||
      p === '/seller/seller-edit-existing-product'
    ) {
      return <SellerAddProductPage onNavigate={onNavigate} editMode={true} />;
    }

    // 5. Riders
    if (
      p === '/seller/riders' ||
      p === '/seller/riders-seller' ||
      p === '/seller/seller-riders-fleet-logistics' ||
      p === '/seller/invite-courier-bottom-sheet-modal-seller'
    ) {
      return <SellerRidersPage onNavigate={onNavigate} />;
    }

    // 6. Returns & Disputes
    if (
      p === '/seller/returns' ||
      p === '/seller/returns-disputes-seller' ||
      p === '/seller/merchant-return-inspection-acceptance' ||
      p === '/seller/seller-inbound-return-tamper-inspection' ||
      p === '/seller/seller-returns-disputes-console' ||
      p === '/seller/seller-dispute-response-1' ||
      p === '/seller/seller-dispute-response-2' ||
      p === '/seller/seller-dispute-response'
    ) {
      return <SellerReturnsPage onNavigate={onNavigate} />;
    }

    // 7. Wallet & Payouts
    if (
      p === '/seller/wallet' ||
      p === '/seller/seller-wallet-payouts' ||
      p === '/seller/seller-wallet-automated-payouts'
    ) {
      return <SellerWalletPage onNavigate={onNavigate} />;
    }

    // 8. Analytics
    if (
      p === '/seller/analytics' ||
      p === '/seller/analytics-seller' ||
      p === '/seller/seller-analytics-performance-heatmaps' ||
      p === '/seller/seller-analytics-performance-heatmaps-1' ||
      p === '/seller/seller-analytics-performance-heatmaps-2'
    ) {
      return <SellerAnalyticsPage onNavigate={onNavigate} />;
    }

    // 9. Discounts & Ads
    if (
      p === '/seller/discounts' ||
      p === '/seller/discounts-ads-seller' ||
      p === '/seller/seller-discounts-flash-sales-promotion-builder' ||
      p === '/seller/seller-discounts-flash-sales-promotion-builder-1' ||
      p === '/seller/seller-discounts-flash-sales-promotion-builder-2'
    ) {
      return <SellerDiscountsPage onNavigate={onNavigate} />;
    }

    // 10. Store Profile & KYC
    if (
      p === '/seller/profile' ||
      p === '/seller/store-profile-seller' ||
      p === '/seller/seller-store-profile-kyc' ||
      p === '/seller/seller-applications-kyc' ||
      p === '/seller/seller-applications-kyc-verification'
    ) {
      return <SellerProfileKycPage onNavigate={onNavigate} />;
    }

    // 11. Notifications
    if (
      p === '/seller/notifications' ||
      p === '/seller/seller-notifications' ||
      p === '/seller/seller-notifications-center'
    ) {
      return <SellerNotificationsPage onNavigate={onNavigate} />;
    }

    // Default fallback to Overview
    return <SellerOverviewPage onNavigate={onNavigate} />;
  };

  return (
    <DashboardShell
      role="seller"
      currentPath={route.path}
      onNavigate={onNavigate}
      title={route.name}
      userName="Nakasero Flagship Store"
      userEmail="seller@nakasero.ug"
    >
      {renderContent()}
    </DashboardShell>
  );
};

export default SellerView;

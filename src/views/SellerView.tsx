import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';

// Converted Seller Mockup Screens
import {
  AddProductStep1PhotosSwiftcartSeller,
  AddProductStep2AiPhotoStudioSwiftcartSeller,
  AddProductStep3AiDescriptionSwiftcartSeller,
  AddProductStep4CatalogDetailsSwiftcartSeller,
  AddProductStep5BuyerPreviewSubmitSwiftcartSeller,
  AnalyticsSwiftcartSeller,
  AssignRiderBottomSheetModalSwiftcartSeller,
  DiscountsAdsSwiftcartSeller,
  EditExistingProductSwiftcartSeller,
  InviteCourierBottomSheetModalSwiftcartSeller,
  MerchantReturnInspectionAcceptance,
  OrdersSwiftcartSeller,
  OverviewSwiftcartSellerDark,
  ProductsSwiftcartSeller,
  ReturnsDisputesSwiftcartSeller,
  RidersSwiftcartSeller,
  SellerDisputeResponseSwiftcartUganda1,
  SellerDisputeResponseSwiftcartUganda2,
  SellerNotificationsSwiftcart,
  SellerOrderDetailSwiftcartSeller,
  StoreProfileSwiftcartSeller,
} from '../mockups/seller';

export interface SellerViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const SellerView: React.FC<SellerViewProps> = ({ route, onNavigate }) => {
  const path = route.path.toLowerCase().replace(/\/+$/, '') || '/seller';
  const { theme } = useDashboardTheme();

  const handleAction = (action: string, payload?: unknown) => {
    console.log('[SellerAction]', action, payload);
  };

  const renderActiveScreen = () => {
    if (path === '/seller/add-product-step-1-photos-seller') return <AddProductStep1PhotosSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/add-product-step-2-ai-photo-studio-seller') return <AddProductStep2AiPhotoStudioSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/add-product-step-3-ai-description-seller') return <AddProductStep3AiDescriptionSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/add-product-step-4-catalog-details-seller') return <AddProductStep4CatalogDetailsSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/add-product-step-5-buyer-preview-submit-seller') return <AddProductStep5BuyerPreviewSubmitSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/analytics-seller') return <AnalyticsSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/assign-rider-bottom-sheet-modal-seller') return <AssignRiderBottomSheetModalSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/discounts-ads-seller') return <DiscountsAdsSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/edit-existing-product-seller') return <EditExistingProductSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/invite-courier-bottom-sheet-modal-seller') return <InviteCourierBottomSheetModalSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/merchant-return-inspection-acceptance') return <MerchantReturnInspectionAcceptance onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/orders-seller') return <OrdersSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/overview-seller') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/products-seller') return <ProductsSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/returns-disputes-seller') return <ReturnsDisputesSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/riders-seller') return <RidersSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response-1') return <SellerDisputeResponseSwiftcartUganda1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response-2') return <SellerDisputeResponseSwiftcartUganda2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-notifications') return <SellerNotificationsSwiftcart onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-order-detail-seller') return <SellerOrderDetailSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/store-profile-seller') return <StoreProfileSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-add-product-with-ai-studio') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps-1') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps-2') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-applications-kyc-verification') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder-1') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder-2') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-edit-product-with-ai-studio') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-inbound-return-tamper-inspection') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-notifications-center') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-orders-master-detail-2') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview-dashboard') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview-dashboard-1') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview-dashboard-2') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-products-batch-pricing') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-products-bulk-price-update') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-riders-fleet-logistics') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-wallet-payouts') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-add-product-5-step-ai-flow') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-applications-kyc') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-edit-existing-product') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-orders-master-detail') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-returns-disputes-console') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-store-profile-kyc') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-wallet-automated-payouts') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller' || path === '/seller/overview') return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;

    return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {renderActiveScreen()}
    </div>
  );
};

export default SellerView;

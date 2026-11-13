import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';

// Converted Seller Mockup Screens
import {
  AddProductStep1PhotosSeller,
  AddProductStep2AiPhotoStudioSeller,
  AddProductStep3AiDescriptionSeller,
  AddProductStep4CatalogDetailsSeller,
  AddProductStep5BuyerPreviewSubmitSeller,
  AnalyticsSeller,
  AssignRiderBottomSheetModalSeller,
  DiscountsAdsSeller,
  EditExistingProductSeller,
  InviteCourierBottomSheetModalSeller,
  MerchantReturnInspectionAcceptance,
  OrdersSeller,
  OverviewSeller,
  ProductsSeller,
  ReturnsDisputesSeller,
  RidersSeller,
  SellerDisputeResponse1,
  SellerDisputeResponse2,
  SellerNotifications,
  SellerOrderDetailSeller,
  StoreProfileSeller,
  SellerAddProductWithAiStudio,
  SellerAnalyticsPerformanceHeatmaps1,
  SellerAnalyticsPerformanceHeatmaps2,
  SellerApplicationsKycVerification,
  SellerDiscountsFlashSalesPromotionBuilder1,
  SellerDiscountsFlashSalesPromotionBuilder2,
  SellerDisputeResponse,
  SellerEditProductWithAiStudio,
  SellerInboundReturnTamperInspection,
  SellerNotificationsCenter,
  SellerOrdersMasterDetail2,
  SellerOverviewDashboard,
  SellerOverviewDashboard1,
  SellerOverviewDashboard2,
  SellerProductsBatchPricing,
  SellerProductsBulkPriceUpdate,
  SellerRidersFleetLogistics,
  SellerWalletPayouts,
  SellerAddProduct5StepAiFlow,
  SellerAnalyticsPerformanceHeatmaps,
  SellerApplicationsKyc,
  SellerDiscountsFlashSalesPromotionBuilder,
  SellerEditExistingProduct,
  SellerOrdersMasterDetail,
  SellerOverview,
  SellerReturnsDisputesConsole,
  SellerStoreProfileKyc,
  SellerWalletAutomatedPayouts,
} from '../mockups/seller';

export interface SellerViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const SellerView: React.FC<SellerViewProps> = ({ route, onNavigate }) => {
  const path = route.path.toLowerCase().replace(/\/$/, '') || '/seller';
  const { theme } = useDashboardTheme();

  const handleAction = (action: string, payload?: unknown) => {
    console.log('[SellerAction]', action, payload);
  };

  const renderActiveScreen = () => {
    if (path === '/seller/add-product-step-1-photos-seller') return <AddProductStep1PhotosSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/add-product-step-2-ai-photo-studio-seller') return <AddProductStep2AiPhotoStudioSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/add-product-step-3-ai-description-seller') return <AddProductStep3AiDescriptionSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/add-product-step-4-catalog-details-seller') return <AddProductStep4CatalogDetailsSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/add-product-step-5-buyer-preview-submit-seller') return <AddProductStep5BuyerPreviewSubmitSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/analytics-seller') return <AnalyticsSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/assign-rider-bottom-sheet-modal-seller') return <AssignRiderBottomSheetModalSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/discounts-ads-seller') return <DiscountsAdsSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/edit-existing-product-seller') return <EditExistingProductSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/invite-courier-bottom-sheet-modal-seller') return <InviteCourierBottomSheetModalSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/merchant-return-inspection-acceptance') return <MerchantReturnInspectionAcceptance onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/orders-seller') return <OrdersSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/overview-seller') return <OverviewSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/products-seller') return <ProductsSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/returns-disputes-seller') return <ReturnsDisputesSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/riders-seller') return <RidersSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response-1') return <SellerDisputeResponse1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response-2') return <SellerDisputeResponse2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-notifications') return <SellerNotifications onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-order-detail-seller') return <SellerOrderDetailSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/store-profile-seller') return <StoreProfileSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-add-product-with-ai-studio') return <SellerAddProductWithAiStudio onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps-1') return <SellerAnalyticsPerformanceHeatmaps1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps-2') return <SellerAnalyticsPerformanceHeatmaps2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-applications-kyc-verification') return <SellerApplicationsKycVerification onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder-1') return <SellerDiscountsFlashSalesPromotionBuilder1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder-2') return <SellerDiscountsFlashSalesPromotionBuilder2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response') return <SellerDisputeResponse onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-edit-product-with-ai-studio') return <SellerEditProductWithAiStudio onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-inbound-return-tamper-inspection') return <SellerInboundReturnTamperInspection onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-notifications-center') return <SellerNotificationsCenter onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-orders-master-detail-2') return <SellerOrdersMasterDetail2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview-dashboard') return <SellerOverviewDashboard onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview-dashboard-1') return <SellerOverviewDashboard1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview-dashboard-2') return <SellerOverviewDashboard2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-products-batch-pricing') return <SellerProductsBatchPricing onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-products-bulk-price-update') return <SellerProductsBulkPriceUpdate onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-riders-fleet-logistics') return <SellerRidersFleetLogistics onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-wallet-payouts') return <SellerWalletPayouts onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-add-product-5-step-ai-flow') return <SellerAddProduct5StepAiFlow onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps') return <SellerAnalyticsPerformanceHeatmaps onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-applications-kyc') return <SellerApplicationsKyc onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder') return <SellerDiscountsFlashSalesPromotionBuilder onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-edit-existing-product') return <SellerEditExistingProduct onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-orders-master-detail') return <SellerOrdersMasterDetail onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview') return <SellerOverview onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-returns-disputes-console') return <SellerReturnsDisputesConsole onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-store-profile-kyc') return <SellerStoreProfileKyc onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-wallet-automated-payouts') return <SellerWalletAutomatedPayouts onNavigate={onNavigate} onAction={handleAction} />;
    // Fallbacks for generic /seller or /seller/overview routes
    if (path === '/seller' || path === '/seller/overview') {
      return <OverviewSeller onNavigate={onNavigate} onAction={handleAction} />;
    }

    return <OverviewSeller onNavigate={onNavigate} onAction={handleAction} />;
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {renderActiveScreen()}
    </div>
  );
};

export default SellerView;

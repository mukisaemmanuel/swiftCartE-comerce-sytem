import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';
import { RoleDashboardShell } from '../components/dashboard/RoleDashboardShell';
import useBreakpoint from '../hooks/useBreakpoint';

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
  SellerAddProduct5StepAiFlowSwiftcartDesktopDark,
  SellerAddProductWithAiStudioTabletDark,
  SellerAnalyticsPerformanceHeatmapsSwiftcartDesktop,
  SellerAnalyticsPerformanceHeatmapsSwiftcartDesktopLight,
  SellerAnalyticsPerformanceHeatmapsTabletLight1,
  SellerAnalyticsPerformanceHeatmapsTabletLight2,
  SellerApplicationsKycSwiftcartDesktopDark,
  SellerApplicationsKycSwiftcartDesktopLight,
  SellerApplicationsKycVerificationTablet,
  SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktop,
  SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktopLight,
  SellerDiscountsFlashSalesPromotionBuilderTabletLight1,
  SellerDiscountsFlashSalesPromotionBuilderTabletLight2,
  SellerDisputeResponseSwiftcartUganda1,
  SellerDisputeResponseSwiftcartUganda2,
  SellerDisputeResponseTabletDark,
  SellerDisputeResponseTabletLight,
  SellerEditExistingProductSwiftcartDesktop,
  SellerEditExistingProductSwiftcartDesktopDark,
  SellerEditProductWithAiStudioTabletDark,
  SellerInboundReturnTamperInspectionSwiftcartDesktop,
  SellerInboundReturnTamperInspectionTabletDark,
  SellerInboundReturnTamperInspectionTabletLight,
  SellerNotificationsCenterSwiftcartDesktop,
  SellerNotificationsCenterSwiftcartDesktopLight,
  SellerNotificationsCenterTabletLight,
  SellerNotificationsSwiftcart,
  SellerOrderDetailSwiftcartSeller,
  SellerOrderDetailSwiftcartSellerLight,
  SellerOrdersMasterDetailSwiftcartDesktop,
  SellerOrdersMasterDetailSwiftcartDesktopLight,
  SellerOrdersMasterDetailTabletLight2,
  SellerOverviewDashboardTabletDark,
  SellerOverviewDashboardTabletLight1,
  SellerOverviewDashboardTabletLight2,
  SellerOverviewSwiftcartDesktop,
  SellerOverviewSwiftcartDesktopLight,
  SellerProductsBatchPricingTabletDark,
  SellerProductsBulkPriceUpdateSwiftcartDesktop,
  SellerProductsBulkPriceUpdateSwiftcartDesktopLight,
  SellerProductsBulkPriceUpdateTabletDark,
  SellerReturnsDisputesConsoleSwiftcartDesktop,
  SellerReturnsDisputesConsoleSwiftcartDesktopLight,
  SellerRidersFleetLogisticsSwiftcartDesktop,
  SellerRidersFleetLogisticsSwiftcartDesktopLight,
  SellerRidersFleetLogisticsTabletDark,
  SellerStoreProfileKycSwiftcartDesktop,
  SellerStoreProfileKycSwiftcartDesktopLight,
  SellerWalletAutomatedPayoutsSwiftcartDesktopLight,
  SellerWalletPayoutsTabletDark,
  StoreProfileSwiftcartSeller,
} from '../mockups/seller';

export interface SellerViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const SellerView: React.FC<SellerViewProps> = ({ route, onNavigate }) => {
  const path = route.path.toLowerCase().replace(/\/+$/, '') || '/seller';
  const { theme } = useDashboardTheme();
  const breakpoint = useBreakpoint();

  const handleAction = (action: string, payload?: unknown) => {
    console.log('[SellerAction]', action, payload);
  };

  const renderActiveScreen = () => {
    const renderOverview = () => {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <SellerOverviewSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <SellerOverviewSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return <OverviewSwiftcartSellerDark onNavigate={onNavigate} onAction={handleAction} />;
    };

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
    if (path === '/seller/overview-seller') return renderOverview();
    if (path === '/seller/products-seller') return <ProductsSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/returns-disputes-seller') return <ReturnsDisputesSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/riders-seller') return <RidersSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response-1') return <SellerDisputeResponseSwiftcartUganda1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response-2') return <SellerDisputeResponseSwiftcartUganda2 onNavigate={onNavigate} onAction={handleAction} />;
    const renderSellerOrderDetail = () =>
      theme === 'dark' ? (
        <SellerOrderDetailSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerOrderDetailSwiftcartSellerLight onNavigate={onNavigate} onAction={handleAction} />
      );

    if (path === '/seller/seller-notifications') return <SellerNotificationsSwiftcart onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-order-detail-seller') return renderSellerOrderDetail();
    if (path === '/seller/store-profile-seller') return <StoreProfileSwiftcartSeller onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-add-product-with-ai-studio') return <SellerAddProductWithAiStudioTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps-1') return <SellerAnalyticsPerformanceHeatmapsTabletLight1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps-2') return <SellerAnalyticsPerformanceHeatmapsTabletLight2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-applications-kyc-verification') return <SellerApplicationsKycVerificationTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder-1') return <SellerDiscountsFlashSalesPromotionBuilderTabletLight1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder-2') return <SellerDiscountsFlashSalesPromotionBuilderTabletLight2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-dispute-response') {
      return theme === 'dark' ? (
        <SellerDisputeResponseTabletDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerDisputeResponseTabletLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-edit-product-with-ai-studio') return <SellerEditProductWithAiStudioTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-inbound-return-tamper-inspection') {
      if (breakpoint === 'desktop') {
        return <SellerInboundReturnTamperInspectionSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />;
      }
      return theme === 'dark' ? (
        <SellerInboundReturnTamperInspectionTabletDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerInboundReturnTamperInspectionTabletLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-notifications-center') {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <SellerNotificationsCenterSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <SellerNotificationsCenterSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return <SellerNotificationsCenterTabletLight onNavigate={onNavigate} onAction={handleAction} />;
    }
    if (path === '/seller/seller-orders-master-detail-2') return <SellerOrdersMasterDetailTabletLight2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview-dashboard') {
      return theme === 'dark' ? (
        <SellerOverviewDashboardTabletDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerOverviewDashboardTabletLight1 onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-overview-dashboard-1') return <SellerOverviewDashboardTabletLight1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-overview-dashboard-2') return <SellerOverviewDashboardTabletLight2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-products-batch-pricing') return <SellerProductsBatchPricingTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-products-bulk-price-update') {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <SellerProductsBulkPriceUpdateSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <SellerProductsBulkPriceUpdateSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return <SellerProductsBulkPriceUpdateTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    }
    if (path === '/seller/seller-riders-fleet-logistics') {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <SellerRidersFleetLogisticsSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <SellerRidersFleetLogisticsSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return <SellerRidersFleetLogisticsTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    }
    if (path === '/seller/seller-wallet-payouts') return <SellerWalletPayoutsTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-add-product-5-step-ai-flow') return <SellerAddProduct5StepAiFlowSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller/seller-analytics-performance-heatmaps') {
      return theme === 'dark' ? (
        <SellerAnalyticsPerformanceHeatmapsSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerAnalyticsPerformanceHeatmapsSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-applications-kyc') {
      return theme === 'dark' ? (
        <SellerApplicationsKycSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerApplicationsKycSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-discounts-flash-sales-promotion-builder') {
      return theme === 'dark' ? (
        <SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerDiscountsFlashSalesPromotionBuilderSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-edit-existing-product') {
      return theme === 'dark' ? (
        <SellerEditExistingProductSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerEditExistingProductSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-orders-master-detail') {
      return theme === 'dark' ? (
        <SellerOrdersMasterDetailSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerOrdersMasterDetailSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-overview') {
      return theme === 'dark' ? (
        <SellerOverviewSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerOverviewSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-returns-disputes-console') {
      return theme === 'dark' ? (
        <SellerReturnsDisputesConsoleSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerReturnsDisputesConsoleSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-store-profile-kyc') {
      return theme === 'dark' ? (
        <SellerStoreProfileKycSwiftcartDesktop onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellerStoreProfileKycSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/seller/seller-wallet-automated-payouts') return <SellerWalletAutomatedPayoutsSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/seller' || path === '/seller/overview') return renderOverview();

    return renderOverview();
  };

  return (
    <RoleDashboardShell role="seller" currentPath={path} onNavigate={onNavigate}>
      {renderActiveScreen()}
    </RoleDashboardShell>
  );
};

export default SellerView;

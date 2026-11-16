import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';
import { RoleDashboardShell } from '../components/dashboard/RoleDashboardShell';
import useBreakpoint from '../hooks/useBreakpoint';

// Converted Admin Mockup Screens
import {
  AdminCommandOverviewSwiftcartDesktopDark,
  AdminCommandOverviewSwiftcartDesktopLight,
  AdminOrderDetailOversight,
  AdminOrderDetailOversightLight,
  AuditLogSecurityLedgerSwiftcartDesktopDark,
  AuditLogSecurityLedgerSwiftcartDesktopLight,
  AuditLogSecurityLedgerTabletDark,
  AuditLogSecurityLedgerTabletLight,
  AuditLogSwiftcartAdmin1,
  AuditLogSwiftcartAdmin2,
  CommissionRatesEarningsSwiftcartAdmin,
  CommissionRatesFeeMatrixSwiftcartDesktopLight,
  EditCategoryCommissionModalWithDatePicker,
  EscrowDisputesSwiftcartAdmin,
  FreezeSellerSwiftcartAdmin,
  HomepageAdsManagementTabletDark,
  HomepageAdsManagementTabletLight,
  HomepageAdsSwiftcartAdmin,
  LockedDispatchesPinOverridesSwiftcartDesktopDark,
  LockedDispatchesPinOverridesSwiftcartDesktopLight,
  LockedDispatchesPinOverridesTabletDark,
  LockedDispatchesPinOverridesTabletLight,
  LockedDispatchesSwiftcartAdmin,
  OrdersOversightDetailTablet,
  OrdersOversightMasterDetailSwiftcartDesktopDark,
  OrdersOversightSwiftcartAdmin,
  OverpaymentsRefundsConsoleSwiftcartDesktopDark,
  OverpaymentsRefundsConsoleSwiftcartDesktopLight,
  OverpaymentsRefundsSwiftcartAdmin,
  OverpaymentsRefundsTabletLight,
  OverviewSwiftcartAdmin,
  OverviewSwiftcartAdminDark,
  PayoutQueueCommissionMatrixTablet,
  PayoutQueueSwiftcartAdmin,
  PayoutQueueTelecomSettlementsSwiftcartDesktopDark,
  ProductModerationCatalogReviewSwiftcartDesktopDark,
  ProductModerationCatalogReviewSwiftcartDesktopLight,
  ProductModerationCatalogReviewTabletDark,
  ProductModerationCatalogReviewTabletLight,
  ProductModerationSwiftcartAdmin,
  RidersCouriersSwiftcartAdmin,
  RidersFleetDirectorySwiftcartDesktopDark,
  RidersFleetDirectorySwiftcartDesktopLight,
  RidersFleetDirectoryTabletDark,
  RidersFleetOperationsLiveDispatchSwiftcartDesktopLight,
  SellersDirectoryAccountGovernanceSwiftcartDesktopDark,
  SellersDirectoryAccountGovernanceSwiftcartDesktopLight,
  SellersDirectorySwiftcartAdmin1,
  SellersDirectorySwiftcartAdmin2,
  SellersDirectoryWithFreezeDrawerTablet,
} from '../mockups/admin';

// Converted SuperAdmin Mockup Screens
import {
  AdminSuperAdminCommandOverviewTablet,
  AuditLogSwiftcartSuperAdmin,
  DangerZoneRoleChangeSwiftcartSuperAdmin,
  OverviewSwiftcartSuperAdmin,
  OverviewSwiftcartSuperAdminDark,
  PlatformSettingsFeeMatrixTabletDark,
  PlatformSettingsSwiftcartSuperAdmin,
  SuperAdminOperationalOverviewTabletDark,
  SuperAdminOperationalOverviewTabletLight,
  UsersRolesManagementSuperAdminSwiftcartDesktopDark,
  UsersRolesManagementSuperAdminSwiftcartDesktopLight,
  UsersRolesSwiftcartSuperAdmin,
  UsersRolesWithRoleChangeTabletDark,
} from '../mockups/super-admin';

export interface AdminViewProps {
  route: RouteDefinition;
  userRole?: string;
  onNavigate: (path: string) => void;
}

export const AdminView: React.FC<AdminViewProps> = ({ route, userRole, onNavigate }) => {
  const path = route.path.toLowerCase().replace(/\/+$/, '') || '/admin';
  const { theme } = useDashboardTheme();
  const breakpoint = useBreakpoint();

  const handleAction = (action: string, payload?: unknown) => {
    console.log('[AdminAction]', action, payload);
  };

  const renderActiveScreen = () => {
    const renderAdminOverview = () => {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <AdminCommandOverviewSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <AdminCommandOverviewSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return theme === 'dark' ? (
        <OverviewSwiftcartAdminDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />
      );
    };

    const renderSuperAdminOverview = () =>
      theme === 'dark' ? (
        <OverviewSwiftcartSuperAdminDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />
      );

    const renderAdminOrderDetail = () =>
      theme === 'dark' ? (
        <AdminOrderDetailOversight onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <AdminOrderDetailOversightLight onNavigate={onNavigate} onAction={handleAction} />
      );

    if (path === '/admin/admin-order-detail-oversight') return renderAdminOrderDetail();
    if (path === '/admin/audit-log-admin-1') return <AuditLogSwiftcartAdmin1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/audit-log-admin-2') return <AuditLogSwiftcartAdmin2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/commission-rates-earnings-admin') return <CommissionRatesEarningsSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/edit-category-commission-modal-with-date-picker') return <EditCategoryCommissionModalWithDatePicker onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/escrow-disputes-admin') return <EscrowDisputesSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/freeze-seller-admin') return <FreezeSellerSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/homepage-ads-admin') return <HomepageAdsSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/locked-dispatches-admin') return <LockedDispatchesSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/orders-oversight-admin') return <OrdersOversightSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/overpayments-refunds-admin') return <OverpaymentsRefundsSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/overview-admin') return renderAdminOverview();
    if (path === '/admin/payout-queue-admin') return <PayoutQueueSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/product-moderation-admin') return <ProductModerationSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/riders-couriers-admin') return <RidersCouriersSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/sellers-directory-admin-1') return <SellersDirectorySwiftcartAdmin1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/sellers-directory-admin-2') return <SellersDirectorySwiftcartAdmin2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/audit-log-security-ledger') {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <AuditLogSecurityLedgerSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <AuditLogSecurityLedgerSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return theme === 'dark' ? (
        <AuditLogSecurityLedgerTabletDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <AuditLogSecurityLedgerTabletLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/admin/homepage-ads-management') {
      return theme === 'dark' ? (
        <HomepageAdsManagementTabletDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <HomepageAdsManagementTabletLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/admin/locked-dispatches-pin-overrides') {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <LockedDispatchesPinOverridesSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <LockedDispatchesPinOverridesSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return theme === 'dark' ? (
        <LockedDispatchesPinOverridesTabletDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <LockedDispatchesPinOverridesTabletLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/admin/orders-oversight-detail') return <OrdersOversightDetailTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/overpayments-refunds') return <OverpaymentsRefundsTabletLight onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/payout-queue-commission-matrix') return <PayoutQueueCommissionMatrixTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/product-moderation-catalog-review') {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <ProductModerationCatalogReviewSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <ProductModerationCatalogReviewSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return theme === 'dark' ? (
        <ProductModerationCatalogReviewTabletDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <ProductModerationCatalogReviewTabletLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/admin/riders-fleet-directory') {
      if (breakpoint === 'desktop') {
        return theme === 'dark' ? (
          <RidersFleetDirectorySwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
        ) : (
          <RidersFleetDirectorySwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
        );
      }
      return <RidersFleetDirectoryTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    }
    if (path === '/admin/sellers-directory-with-freeze-drawer') return <SellersDirectoryWithFreezeDrawerTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/admin-command-overview') {
      return theme === 'dark' ? (
        <AdminCommandOverviewSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <AdminCommandOverviewSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/admin/commission-rates-fee-matrix') return <CommissionRatesFeeMatrixSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/orders-oversight-master-detail') return <OrdersOversightMasterDetailSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/overpayments-refunds-console') {
      return theme === 'dark' ? (
        <OverpaymentsRefundsConsoleSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <OverpaymentsRefundsConsoleSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/admin/payout-queue-telecom-settlements') return <PayoutQueueTelecomSettlementsSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/riders-fleet-operations-live-dispatch') return <RidersFleetOperationsLiveDispatchSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/sellers-directory-account-governance') {
      return theme === 'dark' ? (
        <SellersDirectoryAccountGovernanceSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SellersDirectoryAccountGovernanceSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/super-admin/audit-log-super-admin') return <AuditLogSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/danger-zone-role-change-super-admin') return <DangerZoneRoleChangeSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/overview-super-admin') return renderSuperAdminOverview();
    if (path === '/super-admin/platform-settings-super-admin') return <PlatformSettingsSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/users-roles-super-admin') return <UsersRolesSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/admin-super-admin-command-overview') return <AdminSuperAdminCommandOverviewTablet onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/platform-settings-fee-matrix') return <PlatformSettingsFeeMatrixTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/super-admin-operational-overview') {
      return theme === 'dark' ? (
        <SuperAdminOperationalOverviewTabletDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <SuperAdminOperationalOverviewTabletLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/super-admin/users-roles-with-role-change') return <UsersRolesWithRoleChangeTabletDark onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/users-roles-management-super-admin') {
      return theme === 'dark' ? (
        <UsersRolesManagementSuperAdminSwiftcartDesktopDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <UsersRolesManagementSuperAdminSwiftcartDesktopLight onNavigate={onNavigate} onAction={handleAction} />
      );
    }
    if (path === '/admin' || path === '/admin/overview') return renderAdminOverview();
    if (path === '/super-admin' || path === '/super-admin/overview') return renderSuperAdminOverview();

    if (route.role === 'super-admin') {
      return renderSuperAdminOverview();
    }
    return renderAdminOverview();
  };

  const isSuperAdmin =
    userRole === 'super-admin' ||
    route.role === 'super-admin' ||
    path.startsWith('/super-admin') ||
    (typeof window !== 'undefined' && localStorage.getItem('swiftcart_user_role') === 'super-admin');

  return (
    <RoleDashboardShell
      role={isSuperAdmin ? 'super-admin' : 'admin'}
      currentPath={path}
      onNavigate={onNavigate}
    >
      {renderActiveScreen()}
    </RoleDashboardShell>
  );
};

export default AdminView;

import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';

// Converted Admin Mockup Screens
import {
  AdminOrderDetailOversight,
  AdminOrderDetailOversightLight,
  AuditLogSwiftcartAdmin1,
  AuditLogSwiftcartAdmin2,
  CommissionRatesEarningsSwiftcartAdmin,
  EditCategoryCommissionModalWithDatePicker,
  EscrowDisputesSwiftcartAdmin,
  FreezeSellerSwiftcartAdmin,
  HomepageAdsSwiftcartAdmin,
  LockedDispatchesSwiftcartAdmin,
  OrdersOversightSwiftcartAdmin,
  OverpaymentsRefundsSwiftcartAdmin,
  OverviewSwiftcartAdmin,
  OverviewSwiftcartAdminDark,
  PayoutQueueSwiftcartAdmin,
  ProductModerationSwiftcartAdmin,
  RidersCouriersSwiftcartAdmin,
  SellersDirectorySwiftcartAdmin1,
  SellersDirectorySwiftcartAdmin2,
} from '../mockups/admin';

// Converted SuperAdmin Mockup Screens
import {
  AuditLogSwiftcartSuperAdmin,
  DangerZoneRoleChangeSwiftcartSuperAdmin,
  OverviewSwiftcartSuperAdmin,
  OverviewSwiftcartSuperAdminDark,
  PlatformSettingsSwiftcartSuperAdmin,
  UsersRolesSwiftcartSuperAdmin,
} from '../mockups/super-admin';

export interface AdminViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const AdminView: React.FC<AdminViewProps> = ({ route, onNavigate }) => {
  const path = route.path.toLowerCase().replace(/\/+$/, '') || '/admin';
  const { theme } = useDashboardTheme();

  const handleAction = (action: string, payload?: unknown) => {
    console.log('[AdminAction]', action, payload);
  };

  const renderActiveScreen = () => {
    const renderAdminOverview = () =>
      theme === 'dark' ? (
        <OverviewSwiftcartAdminDark onNavigate={onNavigate} onAction={handleAction} />
      ) : (
        <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />
      );

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
    if (path === '/admin/audit-log-security-ledger') return renderAdminOverview();
    if (path === '/admin/homepage-ads-management') return renderAdminOverview();
    if (path === '/admin/locked-dispatches-pin-overrides') return renderAdminOverview();
    if (path === '/admin/orders-oversight-detail') return renderAdminOverview();
    if (path === '/admin/overpayments-refunds') return renderAdminOverview();
    if (path === '/admin/payout-queue-commission-matrix') return renderAdminOverview();
    if (path === '/admin/product-moderation-catalog-review') return renderAdminOverview();
    if (path === '/admin/riders-fleet-directory') return renderAdminOverview();
    if (path === '/admin/sellers-directory-with-freeze-drawer') return renderAdminOverview();
    if (path === '/admin/admin-command-overview') return renderAdminOverview();
    if (path === '/admin/commission-rates-fee-matrix') return renderAdminOverview();
    if (path === '/admin/orders-oversight-master-detail') return renderAdminOverview();
    if (path === '/admin/overpayments-refunds-console') return renderAdminOverview();
    if (path === '/admin/payout-queue-telecom-settlements') return renderAdminOverview();
    if (path === '/admin/riders-fleet-operations-live-dispatch') return renderAdminOverview();
    if (path === '/admin/sellers-directory-account-governance') return renderAdminOverview();
    if (path === '/super-admin/audit-log-super-admin') return <AuditLogSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/danger-zone-role-change-super-admin') return <DangerZoneRoleChangeSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/overview-super-admin') return renderSuperAdminOverview();
    if (path === '/super-admin/platform-settings-super-admin') return <PlatformSettingsSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/users-roles-super-admin') return <UsersRolesSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/admin-super-admin-command-overview') return renderSuperAdminOverview();
    if (path === '/super-admin/platform-settings-fee-matrix') return renderSuperAdminOverview();
    if (path === '/super-admin/super-admin-operational-overview') return renderSuperAdminOverview();
    if (path === '/super-admin/users-roles-with-role-change') return renderSuperAdminOverview();
    if (path === '/super-admin/users-roles-management-super-admin') return renderSuperAdminOverview();
    if (path === '/admin' || path === '/admin/overview') return renderAdminOverview();
    if (path === '/super-admin' || path === '/super-admin/overview') return renderSuperAdminOverview();

    if (route.role === 'super-admin') {
      return renderSuperAdminOverview();
    }
    return renderAdminOverview();
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-surface text-on-surface">
      {renderActiveScreen()}
    </div>
  );
};

export default AdminView;

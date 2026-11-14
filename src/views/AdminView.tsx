import React from 'react';
import type { RouteDefinition } from '../routes/types';
import { useDashboardTheme } from '../context/ThemeContext';

// Converted Admin Mockup Screens
import {
  AdminOrderDetailOversight,
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
    if (path === '/admin/admin-order-detail-oversight') return <AdminOrderDetailOversight onNavigate={onNavigate} onAction={handleAction} />;
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
    if (path === '/admin/overview-admin') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/payout-queue-admin') return <PayoutQueueSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/product-moderation-admin') return <ProductModerationSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/riders-couriers-admin') return <RidersCouriersSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/sellers-directory-admin-1') return <SellersDirectorySwiftcartAdmin1 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/sellers-directory-admin-2') return <SellersDirectorySwiftcartAdmin2 onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/audit-log-security-ledger') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/homepage-ads-management') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/locked-dispatches-pin-overrides') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/orders-oversight-detail') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/overpayments-refunds') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/payout-queue-commission-matrix') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/product-moderation-catalog-review') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/riders-fleet-directory') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/sellers-directory-with-freeze-drawer') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/admin-command-overview') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/commission-rates-fee-matrix') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/orders-oversight-master-detail') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/overpayments-refunds-console') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/payout-queue-telecom-settlements') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/riders-fleet-operations-live-dispatch') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin/sellers-directory-account-governance') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/audit-log-super-admin') return <AuditLogSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/danger-zone-role-change-super-admin') return <DangerZoneRoleChangeSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/overview-super-admin') return <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/platform-settings-super-admin') return <PlatformSettingsSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/users-roles-super-admin') return <UsersRolesSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/admin-super-admin-command-overview') return <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/platform-settings-fee-matrix') return <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/super-admin-operational-overview') return <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/users-roles-with-role-change') return <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin/users-roles-management-super-admin') return <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/admin' || path === '/admin/overview') return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
    if (path === '/super-admin' || path === '/super-admin/overview') return <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;

    if (route.role === 'super-admin') {
      return <OverviewSwiftcartSuperAdmin onNavigate={onNavigate} onAction={handleAction} />;
    }
    return <OverviewSwiftcartAdmin onNavigate={onNavigate} onAction={handleAction} />;
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      {renderActiveScreen()}
    </div>
  );
};

export default AdminView;

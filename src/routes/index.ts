import type { RouteDefinition, UserRole } from './types';
import { buyerRoutes } from './buyer';
import { sellerRoutes } from './seller';
import { adminRoutes } from './admin';
import { riderRoutes } from './rider';
import { hubRoutes } from './hub';

export * from './types';
export * from './buyer';
export * from './seller';
export * from './admin';
export * from './rider';
export * from './hub';

export const allRoutes: RouteDefinition[] = [
  ...buyerRoutes,
  ...sellerRoutes,
  ...adminRoutes,
  ...riderRoutes,
  ...hubRoutes,
];

export const getRoutesByRole = (role: UserRole): RouteDefinition[] => {
  if (role === 'admin' || role === 'super-admin') {
    return adminRoutes.filter((r) => r.role === role || r.role === 'admin');
  }
  return allRoutes.filter((r) => r.role === role);
};

const SELLER_ALIASES: Record<string, string> = {
  '/seller': '/seller/overview-seller',
  '/seller/overview': '/seller/overview-seller',
  '/seller/orders': '/seller/orders-seller',
  '/seller/products': '/seller/products-seller',
  '/seller/riders': '/seller/riders-seller',
  '/seller/wallet': '/seller/seller-wallet-payouts',
  '/seller/analytics': '/seller/analytics-seller',
  '/seller/discounts': '/seller/discounts-ads-seller',
  '/seller/returns': '/seller/returns-disputes-seller',
  '/seller/profile': '/seller/store-profile-seller',
  '/seller/notifications': '/seller/seller-notifications',
  '/seller/add-product': '/seller/add-product-step-1-photos-seller',
};

export const findRouteByPath = (path: string): RouteDefinition | undefined => {
  const targetPath = SELLER_ALIASES[path] || path;
  return allRoutes.find((r) => r.path === targetPath);
};

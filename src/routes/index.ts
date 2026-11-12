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

export const findRouteByPath = (path: string): RouteDefinition | undefined => {
  return allRoutes.find((r) => r.path === path);
};

import React from 'react';
import DashboardShell from '../components/dashboard/DashboardShell';
import RoutePlaceholder from '../components/shared/RoutePlaceholder';
import type { RouteDefinition } from '../routes/types';
import { sellerRoutes } from '../routes/seller';

export interface SellerViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const SellerView: React.FC<SellerViewProps> = ({ route, onNavigate }) => {
  return (
    <DashboardShell
      role="seller"
      currentPath={route.path}
      onNavigate={onNavigate}
      title={route.name}
      userName="Nakasero Flagship Store"
      userEmail="seller@nakasero.ug"
    >
      <RoutePlaceholder
        route={route}
        onNavigate={onNavigate}
        siblingRoutes={sellerRoutes}
      />
    </DashboardShell>
  );
};

export default SellerView;

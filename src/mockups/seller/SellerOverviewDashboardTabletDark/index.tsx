import React from 'react';
import Tablet from './Tablet';

export interface SellerOverviewDashboardTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOverviewDashboardTabletDark: React.FC<SellerOverviewDashboardTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerOverviewDashboardTabletDark;

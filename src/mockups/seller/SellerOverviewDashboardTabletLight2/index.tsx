import React from 'react';
import Tablet from './Tablet';

export interface SellerOverviewDashboardTabletLight2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOverviewDashboardTabletLight2: React.FC<SellerOverviewDashboardTabletLight2Props> = (props) => {
  return <Tablet {...props} />;
};

export default SellerOverviewDashboardTabletLight2;

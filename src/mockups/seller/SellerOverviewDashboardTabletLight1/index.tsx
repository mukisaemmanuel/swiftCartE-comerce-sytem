import React from 'react';
import Tablet from './Tablet';

export interface SellerOverviewDashboardTabletLight1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOverviewDashboardTabletLight1: React.FC<SellerOverviewDashboardTabletLight1Props> = (props) => {
  return <Tablet {...props} />;
};

export default SellerOverviewDashboardTabletLight1;

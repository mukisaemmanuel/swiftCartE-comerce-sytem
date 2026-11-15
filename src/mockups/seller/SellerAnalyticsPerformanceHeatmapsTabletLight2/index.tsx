import React from 'react';
import Tablet from './Tablet';

export interface SellerAnalyticsPerformanceHeatmapsTabletLight2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAnalyticsPerformanceHeatmapsTabletLight2: React.FC<SellerAnalyticsPerformanceHeatmapsTabletLight2Props> = (props) => {
  return <Tablet {...props} />;
};

export default SellerAnalyticsPerformanceHeatmapsTabletLight2;

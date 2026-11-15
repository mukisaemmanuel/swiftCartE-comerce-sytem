import React from 'react';
import Tablet from './Tablet';

export interface SellerAnalyticsPerformanceHeatmapsTabletLight1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAnalyticsPerformanceHeatmapsTabletLight1: React.FC<SellerAnalyticsPerformanceHeatmapsTabletLight1Props> = (props) => {
  return <Tablet {...props} />;
};

export default SellerAnalyticsPerformanceHeatmapsTabletLight1;

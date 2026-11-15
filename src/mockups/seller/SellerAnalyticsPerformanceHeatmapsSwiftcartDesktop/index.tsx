import React from 'react';
import Desktop from './Desktop';

export interface SellerAnalyticsPerformanceHeatmapsSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAnalyticsPerformanceHeatmapsSwiftcartDesktop: React.FC<SellerAnalyticsPerformanceHeatmapsSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerAnalyticsPerformanceHeatmapsSwiftcartDesktop;

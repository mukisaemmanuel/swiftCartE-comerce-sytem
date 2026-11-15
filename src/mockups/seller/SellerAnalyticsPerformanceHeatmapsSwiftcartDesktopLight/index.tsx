import React from 'react';
import Desktop from './Desktop';

export interface SellerAnalyticsPerformanceHeatmapsSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAnalyticsPerformanceHeatmapsSwiftcartDesktopLight: React.FC<SellerAnalyticsPerformanceHeatmapsSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerAnalyticsPerformanceHeatmapsSwiftcartDesktopLight;

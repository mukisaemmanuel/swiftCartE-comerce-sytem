// Auto-generated responsive container for SellerAnalyticsPerformanceHeatmaps
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Desktop from './Desktop';

export interface SellerAnalyticsPerformanceHeatmapsProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAnalyticsPerformanceHeatmaps: React.FC<SellerAnalyticsPerformanceHeatmapsProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Desktop {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default SellerAnalyticsPerformanceHeatmaps;

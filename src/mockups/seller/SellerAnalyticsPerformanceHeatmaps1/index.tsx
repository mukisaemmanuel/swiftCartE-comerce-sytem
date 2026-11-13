// Auto-generated responsive container for SellerAnalyticsPerformanceHeatmaps1
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Tablet from './Tablet';

export interface SellerAnalyticsPerformanceHeatmaps1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAnalyticsPerformanceHeatmaps1: React.FC<SellerAnalyticsPerformanceHeatmaps1Props> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Tablet {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Tablet {...props} />;
};

export default SellerAnalyticsPerformanceHeatmaps1;

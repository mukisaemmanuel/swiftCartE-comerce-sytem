import React from 'react';
import Tablet from './Tablet';

export interface SellerProductsBatchPricingTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerProductsBatchPricingTabletDark: React.FC<SellerProductsBatchPricingTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerProductsBatchPricingTabletDark;

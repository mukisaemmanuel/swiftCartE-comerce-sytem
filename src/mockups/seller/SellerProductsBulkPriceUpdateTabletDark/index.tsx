import React from 'react';
import Tablet from './Tablet';

export interface SellerProductsBulkPriceUpdateTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerProductsBulkPriceUpdateTabletDark: React.FC<SellerProductsBulkPriceUpdateTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerProductsBulkPriceUpdateTabletDark;

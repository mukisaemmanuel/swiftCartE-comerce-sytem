import React from 'react';
import Desktop from './Desktop';

export interface SellerProductsBulkPriceUpdateSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerProductsBulkPriceUpdateSwiftcartDesktop: React.FC<SellerProductsBulkPriceUpdateSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerProductsBulkPriceUpdateSwiftcartDesktop;

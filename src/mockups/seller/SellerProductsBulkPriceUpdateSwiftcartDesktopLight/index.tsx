import React from 'react';
import Desktop from './Desktop';

export interface SellerProductsBulkPriceUpdateSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerProductsBulkPriceUpdateSwiftcartDesktopLight: React.FC<SellerProductsBulkPriceUpdateSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerProductsBulkPriceUpdateSwiftcartDesktopLight;

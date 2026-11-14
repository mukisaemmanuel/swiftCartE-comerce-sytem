import React from 'react';
import Mobile from './Mobile';

export interface SellerOrderDetailSwiftcartSellerLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOrderDetailSwiftcartSellerLight: React.FC<SellerOrderDetailSwiftcartSellerLightProps> = (props) => {
  return <Mobile {...props} />;
};

export default SellerOrderDetailSwiftcartSellerLight;

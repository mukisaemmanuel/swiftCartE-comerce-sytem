import React from 'react';
import Mobile from './Mobile';

export interface SellerOrderDetailSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOrderDetailSwiftcartSeller: React.FC<SellerOrderDetailSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default SellerOrderDetailSwiftcartSeller;

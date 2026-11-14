import React from 'react';
import Mobile from './Mobile';

export interface SellerNotificationsSwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerNotificationsSwiftcart: React.FC<SellerNotificationsSwiftcartProps> = (props) => {
  return <Mobile {...props} />;
};

export default SellerNotificationsSwiftcart;

import React from 'react';
import Mobile from './Mobile';

export interface OrdersSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OrdersSwiftcartSeller: React.FC<OrdersSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default OrdersSwiftcartSeller;

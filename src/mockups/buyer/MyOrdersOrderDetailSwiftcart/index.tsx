import React from 'react';
import Mobile from './Mobile';

export interface MyOrdersOrderDetailSwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MyOrdersOrderDetailSwiftcart: React.FC<MyOrdersOrderDetailSwiftcartProps> = (props) => {
  return <Mobile {...props} />;
};

export default MyOrdersOrderDetailSwiftcart;

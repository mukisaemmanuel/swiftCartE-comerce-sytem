import React from 'react';
import Mobile from './Mobile';

export interface OrdersOversightSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OrdersOversightSwiftcartAdmin: React.FC<OrdersOversightSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default OrdersOversightSwiftcartAdmin;

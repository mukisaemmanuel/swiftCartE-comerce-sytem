import React from 'react';
import Tablet from './Tablet';

export interface OrdersOversightDetailTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OrdersOversightDetailTablet: React.FC<OrdersOversightDetailTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default OrdersOversightDetailTablet;

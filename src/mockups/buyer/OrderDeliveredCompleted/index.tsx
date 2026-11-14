import React from 'react';
import Mobile from './Mobile';

export interface OrderDeliveredCompletedProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OrderDeliveredCompleted: React.FC<OrderDeliveredCompletedProps> = (props) => {
  return <Mobile {...props} />;
};

export default OrderDeliveredCompleted;

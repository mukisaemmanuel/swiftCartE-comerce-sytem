import React from 'react';
import Mobile from './Mobile';

export interface OrderTrackingDeliveryCodeSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OrderTrackingDeliveryCodeSwiftcartUganda: React.FC<OrderTrackingDeliveryCodeSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default OrderTrackingDeliveryCodeSwiftcartUganda;

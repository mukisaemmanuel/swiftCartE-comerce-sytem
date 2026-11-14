import React from 'react';
import Mobile from './Mobile';

export interface OrderConfirmationDeliveryCodeProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OrderConfirmationDeliveryCode: React.FC<OrderConfirmationDeliveryCodeProps> = (props) => {
  return <Mobile {...props} />;
};

export default OrderConfirmationDeliveryCode;

import React from 'react';
import Mobile from './Mobile';

export interface CheckoutDeliveryCodeSwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CheckoutDeliveryCodeSwiftcart: React.FC<CheckoutDeliveryCodeSwiftcartProps> = (props) => {
  return <Mobile {...props} />;
};

export default CheckoutDeliveryCodeSwiftcart;

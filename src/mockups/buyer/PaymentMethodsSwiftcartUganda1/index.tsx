import React from 'react';
import Mobile from './Mobile';

export interface PaymentMethodsSwiftcartUganda1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PaymentMethodsSwiftcartUganda1: React.FC<PaymentMethodsSwiftcartUganda1Props> = (props) => {
  return <Mobile {...props} />;
};

export default PaymentMethodsSwiftcartUganda1;

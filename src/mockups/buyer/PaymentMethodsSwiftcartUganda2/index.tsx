import React from 'react';
import Mobile from './Mobile';

export interface PaymentMethodsSwiftcartUganda2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PaymentMethodsSwiftcartUganda2: React.FC<PaymentMethodsSwiftcartUganda2Props> = (props) => {
  return <Mobile {...props} />;
};

export default PaymentMethodsSwiftcartUganda2;

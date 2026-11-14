import React from 'react';
import Mobile from './Mobile';

export interface CheckoutOneFlowPaymentWaitingProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CheckoutOneFlowPaymentWaiting: React.FC<CheckoutOneFlowPaymentWaitingProps> = (props) => {
  return <Mobile {...props} />;
};

export default CheckoutOneFlowPaymentWaiting;

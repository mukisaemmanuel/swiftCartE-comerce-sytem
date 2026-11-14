import React from 'react';
import Mobile from './Mobile';

export interface CheckoutStepByStepFlowProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CheckoutStepByStepFlow: React.FC<CheckoutStepByStepFlowProps> = (props) => {
  return <Mobile {...props} />;
};

export default CheckoutStepByStepFlow;

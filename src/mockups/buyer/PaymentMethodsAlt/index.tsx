// Auto-generated responsive container for PaymentMethodsAlt
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';

export interface PaymentMethodsAltProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PaymentMethodsAlt: React.FC<PaymentMethodsAltProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Mobile {...props} />;
  }

  return <Mobile {...props} />;
};

export default PaymentMethodsAlt;

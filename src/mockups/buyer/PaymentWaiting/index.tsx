// Auto-generated responsive container for PaymentWaiting
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Tablet from './Tablet';
import Desktop from './Desktop';

export interface PaymentWaitingProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PaymentWaiting: React.FC<PaymentWaitingProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Desktop {...props} />;
};

export default PaymentWaiting;

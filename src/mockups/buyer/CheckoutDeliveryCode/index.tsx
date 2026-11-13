// Auto-generated responsive container for CheckoutDeliveryCode
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';

export interface CheckoutDeliveryCodeProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CheckoutDeliveryCode: React.FC<CheckoutDeliveryCodeProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Mobile {...props} />;
  }

  return <Mobile {...props} />;
};

export default CheckoutDeliveryCode;

// Auto-generated responsive container for Vouchers
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Tablet from './Tablet';

export interface VouchersProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Vouchers: React.FC<VouchersProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Tablet {...props} />;
};

export default Vouchers;

import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Tablet from './Tablet';

export interface SellerApplicationStatusProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerApplicationStatus: React.FC<SellerApplicationStatusProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Mobile {...props} />;
};

export default SellerApplicationStatus;

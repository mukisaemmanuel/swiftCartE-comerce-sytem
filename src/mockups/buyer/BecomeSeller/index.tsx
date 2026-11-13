// Auto-generated responsive container for BecomeSeller
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Tablet from './Tablet';

export interface BecomeSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const BecomeSeller: React.FC<BecomeSellerProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Tablet {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Tablet {...props} />;
};

export default BecomeSeller;

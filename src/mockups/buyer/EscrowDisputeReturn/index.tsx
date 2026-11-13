// Auto-generated responsive container for EscrowDisputeReturn
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Tablet from './Tablet';

export interface EscrowDisputeReturnProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EscrowDisputeReturn: React.FC<EscrowDisputeReturnProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Tablet {...props} />;
};

export default EscrowDisputeReturn;

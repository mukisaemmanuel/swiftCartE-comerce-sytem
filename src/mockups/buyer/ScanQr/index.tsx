// Auto-generated responsive container for ScanQr
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';

export interface ScanQrProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ScanQr: React.FC<ScanQrProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Mobile {...props} />;
  }

  return <Mobile {...props} />;
};

export default ScanQr;

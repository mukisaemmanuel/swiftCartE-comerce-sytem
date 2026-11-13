// Auto-generated responsive container for SplashFirstOpen
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';

export interface SplashFirstOpenProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SplashFirstOpen: React.FC<SplashFirstOpenProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Mobile {...props} />;
  }

  return <Mobile {...props} />;
};

export default SplashFirstOpen;

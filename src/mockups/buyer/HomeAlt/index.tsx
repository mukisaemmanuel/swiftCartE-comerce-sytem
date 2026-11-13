// Auto-generated responsive container for HomeAlt
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Desktop from './Desktop';

export interface HomeAltProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HomeAlt: React.FC<HomeAltProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default HomeAlt;

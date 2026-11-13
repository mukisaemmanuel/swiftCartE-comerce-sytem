// Auto-generated responsive container for HelpCentre
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Tablet from './Tablet';
import Desktop from './Desktop';

export interface HelpCentreProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HelpCentre: React.FC<HelpCentreProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Desktop {...props} />;
};

export default HelpCentre;

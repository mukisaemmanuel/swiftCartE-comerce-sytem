// Auto-generated responsive container for PhoneVerificationAlt
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Desktop from './Desktop';

export interface PhoneVerificationAltProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PhoneVerificationAlt: React.FC<PhoneVerificationAltProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Desktop {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default PhoneVerificationAlt;

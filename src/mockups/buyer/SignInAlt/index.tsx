// Auto-generated responsive container for SignInAlt
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Desktop from './Desktop';

export interface SignInAltProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SignInAlt: React.FC<SignInAltProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Desktop {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default SignInAlt;

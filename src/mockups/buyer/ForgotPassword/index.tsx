// Auto-generated responsive container for ForgotPassword
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';

export interface ForgotPasswordProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Mobile {...props} />;
  }

  return <Mobile {...props} />;
};

export default ForgotPassword;

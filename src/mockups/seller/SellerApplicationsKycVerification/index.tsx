// Auto-generated responsive container for SellerApplicationsKycVerification
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Tablet from './Tablet';

export interface SellerApplicationsKycVerificationProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerApplicationsKycVerification: React.FC<SellerApplicationsKycVerificationProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Tablet {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Tablet {...props} />;
};

export default SellerApplicationsKycVerification;

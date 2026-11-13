// Auto-generated responsive container for MerchantReturnInspectionAcceptance
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';

export interface MerchantReturnInspectionAcceptanceProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MerchantReturnInspectionAcceptance: React.FC<MerchantReturnInspectionAcceptanceProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Mobile {...props} />;
  }

  return <Mobile {...props} />;
};

export default MerchantReturnInspectionAcceptance;

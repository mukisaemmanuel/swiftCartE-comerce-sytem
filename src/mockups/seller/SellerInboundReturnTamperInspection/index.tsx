// Auto-generated responsive container for SellerInboundReturnTamperInspection
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Tablet from './Tablet';
import Desktop from './Desktop';

export interface SellerInboundReturnTamperInspectionProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerInboundReturnTamperInspection: React.FC<SellerInboundReturnTamperInspectionProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Tablet {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Desktop {...props} />;
};

export default SellerInboundReturnTamperInspection;

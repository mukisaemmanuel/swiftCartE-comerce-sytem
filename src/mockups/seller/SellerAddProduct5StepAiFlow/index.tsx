// Auto-generated responsive container for SellerAddProduct5StepAiFlow
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Desktop from './Desktop';

export interface SellerAddProduct5StepAiFlowProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAddProduct5StepAiFlow: React.FC<SellerAddProduct5StepAiFlowProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Desktop {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default SellerAddProduct5StepAiFlow;

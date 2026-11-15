import React from 'react';
import Desktop from './Desktop';

export interface SellerAddProduct5StepAiFlowSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerAddProduct5StepAiFlowSwiftcartDesktopDark: React.FC<SellerAddProduct5StepAiFlowSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerAddProduct5StepAiFlowSwiftcartDesktopDark;

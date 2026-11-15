import React from 'react';
import Desktop from './Desktop';

export interface SellerInboundReturnTamperInspectionSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerInboundReturnTamperInspectionSwiftcartDesktop: React.FC<SellerInboundReturnTamperInspectionSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerInboundReturnTamperInspectionSwiftcartDesktop;

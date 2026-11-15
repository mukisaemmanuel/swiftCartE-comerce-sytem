import React from 'react';
import Tablet from './Tablet';

export interface SellerInboundReturnTamperInspectionTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerInboundReturnTamperInspectionTabletDark: React.FC<SellerInboundReturnTamperInspectionTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerInboundReturnTamperInspectionTabletDark;

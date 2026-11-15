import React from 'react';
import Tablet from './Tablet';

export interface SellerInboundReturnTamperInspectionTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerInboundReturnTamperInspectionTabletLight: React.FC<SellerInboundReturnTamperInspectionTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerInboundReturnTamperInspectionTabletLight;

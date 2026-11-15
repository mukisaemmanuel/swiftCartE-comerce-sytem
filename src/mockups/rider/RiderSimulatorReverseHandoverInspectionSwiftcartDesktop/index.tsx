import React from 'react';
import Desktop from './Desktop';

export interface RiderSimulatorReverseHandoverInspectionSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderSimulatorReverseHandoverInspectionSwiftcartDesktop: React.FC<RiderSimulatorReverseHandoverInspectionSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default RiderSimulatorReverseHandoverInspectionSwiftcartDesktop;

import React from 'react';
import Desktop from './Desktop';

export interface RiderSimulatorActiveTaskOtpSimulationSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderSimulatorActiveTaskOtpSimulationSwiftcartDesktop: React.FC<RiderSimulatorActiveTaskOtpSimulationSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default RiderSimulatorActiveTaskOtpSimulationSwiftcartDesktop;

import React from 'react';
import Desktop from './Desktop';

export interface RiderSimulatorSecurityLockedExceptionsSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderSimulatorSecurityLockedExceptionsSwiftcartDesktop: React.FC<RiderSimulatorSecurityLockedExceptionsSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default RiderSimulatorSecurityLockedExceptionsSwiftcartDesktop;

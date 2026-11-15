import React from 'react';
import Desktop from './Desktop';

export interface HubInboundIntakeBarcodeScanSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubInboundIntakeBarcodeScanSwiftcartDesktopDark: React.FC<HubInboundIntakeBarcodeScanSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubInboundIntakeBarcodeScanSwiftcartDesktopDark;

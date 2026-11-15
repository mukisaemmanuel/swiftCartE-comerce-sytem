import React from 'react';
import Desktop from './Desktop';

export interface HubInboundIntakeBarcodeScanSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubInboundIntakeBarcodeScanSwiftcartDesktopLight: React.FC<HubInboundIntakeBarcodeScanSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubInboundIntakeBarcodeScanSwiftcartDesktopLight;

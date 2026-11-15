import React from 'react';
import Tablet from './Tablet';

export interface HubIntakeHighSpeedBarcodeScannerTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubIntakeHighSpeedBarcodeScannerTabletLight: React.FC<HubIntakeHighSpeedBarcodeScannerTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubIntakeHighSpeedBarcodeScannerTabletLight;

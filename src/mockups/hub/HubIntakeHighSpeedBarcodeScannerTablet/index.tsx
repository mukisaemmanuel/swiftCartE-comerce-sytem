import React from 'react';
import Tablet from './Tablet';

export interface HubIntakeHighSpeedBarcodeScannerTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubIntakeHighSpeedBarcodeScannerTablet: React.FC<HubIntakeHighSpeedBarcodeScannerTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubIntakeHighSpeedBarcodeScannerTablet;

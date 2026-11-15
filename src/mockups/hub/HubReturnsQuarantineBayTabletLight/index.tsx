import React from 'react';
import Tablet from './Tablet';

export interface HubReturnsQuarantineBayTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubReturnsQuarantineBayTabletLight: React.FC<HubReturnsQuarantineBayTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubReturnsQuarantineBayTabletLight;

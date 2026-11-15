import React from 'react';
import Tablet from './Tablet';

export interface HubPickupHandoverConsoleTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubPickupHandoverConsoleTabletLight: React.FC<HubPickupHandoverConsoleTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubPickupHandoverConsoleTabletLight;

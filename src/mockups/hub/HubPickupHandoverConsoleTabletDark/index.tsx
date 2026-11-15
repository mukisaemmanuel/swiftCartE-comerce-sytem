import React from 'react';
import Tablet from './Tablet';

export interface HubPickupHandoverConsoleTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubPickupHandoverConsoleTabletDark: React.FC<HubPickupHandoverConsoleTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubPickupHandoverConsoleTabletDark;

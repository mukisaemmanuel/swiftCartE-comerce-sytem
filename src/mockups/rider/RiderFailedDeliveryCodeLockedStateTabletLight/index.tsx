import React from 'react';
import Tablet from './Tablet';

export interface RiderFailedDeliveryCodeLockedStateTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderFailedDeliveryCodeLockedStateTabletLight: React.FC<RiderFailedDeliveryCodeLockedStateTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderFailedDeliveryCodeLockedStateTabletLight;

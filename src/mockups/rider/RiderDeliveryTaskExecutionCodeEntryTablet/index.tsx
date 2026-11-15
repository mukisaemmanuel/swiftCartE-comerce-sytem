import React from 'react';
import Tablet from './Tablet';

export interface RiderDeliveryTaskExecutionCodeEntryTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderDeliveryTaskExecutionCodeEntryTablet: React.FC<RiderDeliveryTaskExecutionCodeEntryTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderDeliveryTaskExecutionCodeEntryTablet;

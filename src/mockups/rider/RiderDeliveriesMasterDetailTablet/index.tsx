import React from 'react';
import Tablet from './Tablet';

export interface RiderDeliveriesMasterDetailTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderDeliveriesMasterDetailTablet: React.FC<RiderDeliveriesMasterDetailTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderDeliveriesMasterDetailTablet;

import React from 'react';
import Tablet from './Tablet';

export interface RiderOverviewDispatchMapTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderOverviewDispatchMapTablet: React.FC<RiderOverviewDispatchMapTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderOverviewDispatchMapTablet;

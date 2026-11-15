import React from 'react';
import Tablet from './Tablet';

export interface SuperAdminOperationalOverviewTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SuperAdminOperationalOverviewTabletLight: React.FC<SuperAdminOperationalOverviewTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default SuperAdminOperationalOverviewTabletLight;

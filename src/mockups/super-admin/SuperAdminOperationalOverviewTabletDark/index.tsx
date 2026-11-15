import React from 'react';
import Tablet from './Tablet';

export interface SuperAdminOperationalOverviewTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SuperAdminOperationalOverviewTabletDark: React.FC<SuperAdminOperationalOverviewTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SuperAdminOperationalOverviewTabletDark;

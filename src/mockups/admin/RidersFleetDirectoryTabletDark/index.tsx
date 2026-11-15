import React from 'react';
import Tablet from './Tablet';

export interface RidersFleetDirectoryTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RidersFleetDirectoryTabletDark: React.FC<RidersFleetDirectoryTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default RidersFleetDirectoryTabletDark;

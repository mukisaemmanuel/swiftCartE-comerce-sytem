import React from 'react';
import Tablet from './Tablet';

export interface RiderMapLiveDispatchNavigationTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderMapLiveDispatchNavigationTabletDark: React.FC<RiderMapLiveDispatchNavigationTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderMapLiveDispatchNavigationTabletDark;

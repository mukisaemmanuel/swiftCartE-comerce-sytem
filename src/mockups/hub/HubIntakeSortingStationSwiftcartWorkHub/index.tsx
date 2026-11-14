import React from 'react';
import Mobile from './Mobile';

export interface HubIntakeSortingStationSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubIntakeSortingStationSwiftcartWorkHub: React.FC<HubIntakeSortingStationSwiftcartWorkHubProps> = (props) => {
  return <Mobile {...props} />;
};

export default HubIntakeSortingStationSwiftcartWorkHub;

import React from 'react';
import Mobile from './Mobile';

export interface HubSortingStationSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubSortingStationSwiftcartWorkHub: React.FC<HubSortingStationSwiftcartWorkHubProps> = (props) => {
  return <Mobile {...props} />;
};

export default HubSortingStationSwiftcartWorkHub;

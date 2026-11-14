import React from 'react';
import Mobile from './Mobile';

export interface HubIntakeStationSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubIntakeStationSwiftcartWorkHub: React.FC<HubIntakeStationSwiftcartWorkHubProps> = (props) => {
  return <Mobile {...props} />;
};

export default HubIntakeStationSwiftcartWorkHub;

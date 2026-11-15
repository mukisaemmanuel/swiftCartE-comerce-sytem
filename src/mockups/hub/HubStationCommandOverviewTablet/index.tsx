import React from 'react';
import Tablet from './Tablet';

export interface HubStationCommandOverviewTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStationCommandOverviewTablet: React.FC<HubStationCommandOverviewTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubStationCommandOverviewTablet;

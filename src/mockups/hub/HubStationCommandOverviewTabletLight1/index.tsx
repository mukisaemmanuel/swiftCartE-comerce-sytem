import React from 'react';
import Tablet from './Tablet';

export interface HubStationCommandOverviewTabletLight1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStationCommandOverviewTabletLight1: React.FC<HubStationCommandOverviewTabletLight1Props> = (props) => {
  return <Tablet {...props} />;
};

export default HubStationCommandOverviewTabletLight1;

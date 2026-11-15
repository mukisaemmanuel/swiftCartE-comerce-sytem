import React from 'react';
import Tablet from './Tablet';

export interface HubStationCommandOverviewTabletLight2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStationCommandOverviewTabletLight2: React.FC<HubStationCommandOverviewTabletLight2Props> = (props) => {
  return <Tablet {...props} />;
};

export default HubStationCommandOverviewTabletLight2;

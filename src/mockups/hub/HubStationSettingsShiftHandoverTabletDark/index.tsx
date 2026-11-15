import React from 'react';
import Tablet from './Tablet';

export interface HubStationSettingsShiftHandoverTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStationSettingsShiftHandoverTabletDark: React.FC<HubStationSettingsShiftHandoverTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubStationSettingsShiftHandoverTabletDark;

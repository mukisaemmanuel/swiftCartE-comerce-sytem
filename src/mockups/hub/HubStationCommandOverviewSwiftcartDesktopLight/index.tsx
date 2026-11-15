import React from 'react';
import Desktop from './Desktop';

export interface HubStationCommandOverviewSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStationCommandOverviewSwiftcartDesktopLight: React.FC<HubStationCommandOverviewSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubStationCommandOverviewSwiftcartDesktopLight;

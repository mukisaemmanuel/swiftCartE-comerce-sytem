import React from 'react';
import Desktop from './Desktop';

export interface HubStationCommandOverviewSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStationCommandOverviewSwiftcartDesktopDark: React.FC<HubStationCommandOverviewSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubStationCommandOverviewSwiftcartDesktopDark;

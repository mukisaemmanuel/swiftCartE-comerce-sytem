import React from 'react';
import Tablet from './Tablet';

export interface HubRiderDispatchCourierStagingTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubRiderDispatchCourierStagingTabletDark: React.FC<HubRiderDispatchCourierStagingTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubRiderDispatchCourierStagingTabletDark;

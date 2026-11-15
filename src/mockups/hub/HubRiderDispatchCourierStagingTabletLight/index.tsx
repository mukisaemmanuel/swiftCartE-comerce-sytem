import React from 'react';
import Tablet from './Tablet';

export interface HubRiderDispatchCourierStagingTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubRiderDispatchCourierStagingTabletLight: React.FC<HubRiderDispatchCourierStagingTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubRiderDispatchCourierStagingTabletLight;

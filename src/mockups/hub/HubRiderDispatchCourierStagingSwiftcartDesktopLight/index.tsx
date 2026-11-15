import React from 'react';
import Desktop from './Desktop';

export interface HubRiderDispatchCourierStagingSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubRiderDispatchCourierStagingSwiftcartDesktopLight: React.FC<HubRiderDispatchCourierStagingSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubRiderDispatchCourierStagingSwiftcartDesktopLight;

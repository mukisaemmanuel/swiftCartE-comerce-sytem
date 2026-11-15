import React from 'react';
import Desktop from './Desktop';

export interface HubRiderDispatchCourierStagingSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubRiderDispatchCourierStagingSwiftcartDesktopDark: React.FC<HubRiderDispatchCourierStagingSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubRiderDispatchCourierStagingSwiftcartDesktopDark;

import React from 'react';
import Tablet from './Tablet';

export interface RiderProfileSupportHubTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderProfileSupportHubTabletLight: React.FC<RiderProfileSupportHubTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default RiderProfileSupportHubTabletLight;

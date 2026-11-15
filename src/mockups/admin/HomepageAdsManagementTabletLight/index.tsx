import React from 'react';
import Tablet from './Tablet';

export interface HomepageAdsManagementTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HomepageAdsManagementTabletLight: React.FC<HomepageAdsManagementTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default HomepageAdsManagementTabletLight;

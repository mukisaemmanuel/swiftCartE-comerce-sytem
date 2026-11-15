import React from 'react';
import Tablet from './Tablet';

export interface HomepageAdsManagementTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HomepageAdsManagementTabletDark: React.FC<HomepageAdsManagementTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default HomepageAdsManagementTabletDark;

import React from 'react';
import Mobile from './Mobile';

export interface RegionalLinehaulTransitHandoverSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RegionalLinehaulTransitHandoverSwiftcartWorkHub: React.FC<RegionalLinehaulTransitHandoverSwiftcartWorkHubProps> = (props) => {
  return <Mobile {...props} />;
};

export default RegionalLinehaulTransitHandoverSwiftcartWorkHub;

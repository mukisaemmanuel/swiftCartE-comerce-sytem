import React from 'react';
import Tablet from './Tablet';

export interface HubReturnsQuarantineBayTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubReturnsQuarantineBayTabletDark: React.FC<HubReturnsQuarantineBayTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubReturnsQuarantineBayTabletDark;

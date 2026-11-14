import React from 'react';
import Mobile from './Mobile';

export interface HelpCentreSupportSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HelpCentreSupportSwiftcartUganda: React.FC<HelpCentreSupportSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default HelpCentreSupportSwiftcartUganda;

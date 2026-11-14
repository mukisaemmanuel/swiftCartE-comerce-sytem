import React from 'react';
import Mobile from './Mobile';

export interface RiderCodeLockedSwiftcartSecurityProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderCodeLockedSwiftcartSecurity: React.FC<RiderCodeLockedSwiftcartSecurityProps> = (props) => {
  return <Mobile {...props} />;
};

export default RiderCodeLockedSwiftcartSecurity;

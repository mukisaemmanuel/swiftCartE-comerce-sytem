import React from 'react';
import Mobile from './Mobile';

export interface RiderMapSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderMapSwiftcartRider: React.FC<RiderMapSwiftcartRiderProps> = (props) => {
  return <Mobile {...props} />;
};

export default RiderMapSwiftcartRider;

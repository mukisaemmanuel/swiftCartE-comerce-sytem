import React from 'react';
import Mobile from './Mobile';

export interface RiderReturnPickupSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderReturnPickupSwiftcartRider: React.FC<RiderReturnPickupSwiftcartRiderProps> = (props) => {
  return <Mobile {...props} />;
};

export default RiderReturnPickupSwiftcartRider;

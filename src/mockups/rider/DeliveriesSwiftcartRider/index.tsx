import React from 'react';
import Mobile from './Mobile';

export interface DeliveriesSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DeliveriesSwiftcartRider: React.FC<DeliveriesSwiftcartRiderProps> = (props) => {
  return <Mobile {...props} />;
};

export default DeliveriesSwiftcartRider;

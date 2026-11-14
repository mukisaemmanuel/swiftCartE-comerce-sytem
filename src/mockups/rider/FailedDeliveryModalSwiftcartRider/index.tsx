import React from 'react';
import Mobile from './Mobile';

export interface FailedDeliveryModalSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const FailedDeliveryModalSwiftcartRider: React.FC<FailedDeliveryModalSwiftcartRiderProps> = (props) => {
  return <Mobile {...props} />;
};

export default FailedDeliveryModalSwiftcartRider;

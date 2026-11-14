import React from 'react';
import Mobile from './Mobile';

export interface RiderSellerPickupDeliveryDetailLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderSellerPickupDeliveryDetailLight: React.FC<RiderSellerPickupDeliveryDetailLightProps> = (props) => {
  return <Mobile {...props} />;
};

export default RiderSellerPickupDeliveryDetailLight;

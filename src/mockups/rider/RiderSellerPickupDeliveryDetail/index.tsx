import React from 'react';
import Mobile from './Mobile';

export interface RiderSellerPickupDeliveryDetailProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RiderSellerPickupDeliveryDetail: React.FC<RiderSellerPickupDeliveryDetailProps> = (props) => {
  return <Mobile {...props} />;
};

export default RiderSellerPickupDeliveryDetail;

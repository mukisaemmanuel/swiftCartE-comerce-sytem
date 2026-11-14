import React from 'react';
import Mobile from './Mobile';

export interface DeliveryAddressesSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DeliveryAddressesSwiftcartUganda: React.FC<DeliveryAddressesSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default DeliveryAddressesSwiftcartUganda;

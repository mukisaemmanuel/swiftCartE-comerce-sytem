import React from 'react';
import Mobile from './Mobile';

export interface PickupStationChooserSwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PickupStationChooserSwiftcart: React.FC<PickupStationChooserSwiftcartProps> = (props) => {
  return <Mobile {...props} />;
};

export default PickupStationChooserSwiftcart;

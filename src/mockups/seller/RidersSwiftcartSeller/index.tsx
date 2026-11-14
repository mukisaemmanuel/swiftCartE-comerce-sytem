import React from 'react';
import Mobile from './Mobile';

export interface RidersSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RidersSwiftcartSeller: React.FC<RidersSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default RidersSwiftcartSeller;

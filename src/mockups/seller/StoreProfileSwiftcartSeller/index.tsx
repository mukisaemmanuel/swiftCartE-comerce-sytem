import React from 'react';
import Mobile from './Mobile';

export interface StoreProfileSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const StoreProfileSwiftcartSeller: React.FC<StoreProfileSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default StoreProfileSwiftcartSeller;

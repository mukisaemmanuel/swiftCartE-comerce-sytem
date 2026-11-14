import React from 'react';
import Mobile from './Mobile';

export interface SellersDirectorySwiftcartAdmin1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellersDirectorySwiftcartAdmin1: React.FC<SellersDirectorySwiftcartAdmin1Props> = (props) => {
  return <Mobile {...props} />;
};

export default SellersDirectorySwiftcartAdmin1;

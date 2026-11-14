import React from 'react';
import Mobile from './Mobile';

export interface SellersDirectorySwiftcartAdmin2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellersDirectorySwiftcartAdmin2: React.FC<SellersDirectorySwiftcartAdmin2Props> = (props) => {
  return <Mobile {...props} />;
};

export default SellersDirectorySwiftcartAdmin2;

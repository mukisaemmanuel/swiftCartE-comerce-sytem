import React from 'react';
import Tablet from './Tablet';

export interface SellerWalletPayoutsTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerWalletPayoutsTabletDark: React.FC<SellerWalletPayoutsTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerWalletPayoutsTabletDark;

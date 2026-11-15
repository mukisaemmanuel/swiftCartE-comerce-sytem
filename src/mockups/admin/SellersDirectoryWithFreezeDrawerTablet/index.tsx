import React from 'react';
import Tablet from './Tablet';

export interface SellersDirectoryWithFreezeDrawerTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellersDirectoryWithFreezeDrawerTablet: React.FC<SellersDirectoryWithFreezeDrawerTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellersDirectoryWithFreezeDrawerTablet;

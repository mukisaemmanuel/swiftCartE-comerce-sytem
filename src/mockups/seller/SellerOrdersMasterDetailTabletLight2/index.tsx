import React from 'react';
import Tablet from './Tablet';

export interface SellerOrdersMasterDetailTabletLight2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOrdersMasterDetailTabletLight2: React.FC<SellerOrdersMasterDetailTabletLight2Props> = (props) => {
  return <Tablet {...props} />;
};

export default SellerOrdersMasterDetailTabletLight2;

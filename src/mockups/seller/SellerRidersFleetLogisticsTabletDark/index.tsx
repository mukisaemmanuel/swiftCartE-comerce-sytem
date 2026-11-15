import React from 'react';
import Tablet from './Tablet';

export interface SellerRidersFleetLogisticsTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerRidersFleetLogisticsTabletDark: React.FC<SellerRidersFleetLogisticsTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerRidersFleetLogisticsTabletDark;

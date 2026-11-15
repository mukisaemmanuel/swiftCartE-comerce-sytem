import React from 'react';
import Desktop from './Desktop';

export interface SellerRidersFleetLogisticsSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerRidersFleetLogisticsSwiftcartDesktop: React.FC<SellerRidersFleetLogisticsSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerRidersFleetLogisticsSwiftcartDesktop;

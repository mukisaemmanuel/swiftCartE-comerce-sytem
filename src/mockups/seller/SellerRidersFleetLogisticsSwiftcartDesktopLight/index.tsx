import React from 'react';
import Desktop from './Desktop';

export interface SellerRidersFleetLogisticsSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerRidersFleetLogisticsSwiftcartDesktopLight: React.FC<SellerRidersFleetLogisticsSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerRidersFleetLogisticsSwiftcartDesktopLight;

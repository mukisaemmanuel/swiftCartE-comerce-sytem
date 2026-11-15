import React from 'react';
import Desktop from './Desktop';

export interface RidersFleetDirectorySwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RidersFleetDirectorySwiftcartDesktopLight: React.FC<RidersFleetDirectorySwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default RidersFleetDirectorySwiftcartDesktopLight;

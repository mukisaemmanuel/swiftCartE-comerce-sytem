import React from 'react';
import Desktop from './Desktop';

export interface RidersFleetDirectorySwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const RidersFleetDirectorySwiftcartDesktopDark: React.FC<RidersFleetDirectorySwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default RidersFleetDirectorySwiftcartDesktopDark;

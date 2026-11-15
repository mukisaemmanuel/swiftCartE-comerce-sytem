import React from 'react';
import Desktop from './Desktop';

export interface SellerOverviewSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOverviewSwiftcartDesktopLight: React.FC<SellerOverviewSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerOverviewSwiftcartDesktopLight;

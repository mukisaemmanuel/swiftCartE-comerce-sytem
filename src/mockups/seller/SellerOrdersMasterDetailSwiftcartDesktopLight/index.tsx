import React from 'react';
import Desktop from './Desktop';

export interface SellerOrdersMasterDetailSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOrdersMasterDetailSwiftcartDesktopLight: React.FC<SellerOrdersMasterDetailSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerOrdersMasterDetailSwiftcartDesktopLight;

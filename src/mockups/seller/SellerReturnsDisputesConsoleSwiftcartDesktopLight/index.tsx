import React from 'react';
import Desktop from './Desktop';

export interface SellerReturnsDisputesConsoleSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerReturnsDisputesConsoleSwiftcartDesktopLight: React.FC<SellerReturnsDisputesConsoleSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerReturnsDisputesConsoleSwiftcartDesktopLight;

import React from 'react';
import Desktop from './Desktop';

export interface SellerWalletAutomatedPayoutsSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerWalletAutomatedPayoutsSwiftcartDesktopLight: React.FC<SellerWalletAutomatedPayoutsSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerWalletAutomatedPayoutsSwiftcartDesktopLight;

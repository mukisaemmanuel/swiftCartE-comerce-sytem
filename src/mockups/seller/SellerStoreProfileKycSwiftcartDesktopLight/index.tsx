import React from 'react';
import Desktop from './Desktop';

export interface SellerStoreProfileKycSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerStoreProfileKycSwiftcartDesktopLight: React.FC<SellerStoreProfileKycSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerStoreProfileKycSwiftcartDesktopLight;

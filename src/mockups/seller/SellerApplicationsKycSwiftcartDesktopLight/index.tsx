import React from 'react';
import Desktop from './Desktop';

export interface SellerApplicationsKycSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerApplicationsKycSwiftcartDesktopLight: React.FC<SellerApplicationsKycSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerApplicationsKycSwiftcartDesktopLight;

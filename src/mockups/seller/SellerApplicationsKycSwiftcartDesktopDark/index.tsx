import React from 'react';
import Desktop from './Desktop';

export interface SellerApplicationsKycSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerApplicationsKycSwiftcartDesktopDark: React.FC<SellerApplicationsKycSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerApplicationsKycSwiftcartDesktopDark;

import React from 'react';
import Desktop from './Desktop';

export interface SellerStoreProfileKycSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerStoreProfileKycSwiftcartDesktop: React.FC<SellerStoreProfileKycSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerStoreProfileKycSwiftcartDesktop;

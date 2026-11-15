import React from 'react';
import Desktop from './Desktop';

export interface SellerEditExistingProductSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerEditExistingProductSwiftcartDesktop: React.FC<SellerEditExistingProductSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerEditExistingProductSwiftcartDesktop;

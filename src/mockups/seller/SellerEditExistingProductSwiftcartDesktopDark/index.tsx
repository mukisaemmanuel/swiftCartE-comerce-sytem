import React from 'react';
import Desktop from './Desktop';

export interface SellerEditExistingProductSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerEditExistingProductSwiftcartDesktopDark: React.FC<SellerEditExistingProductSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerEditExistingProductSwiftcartDesktopDark;

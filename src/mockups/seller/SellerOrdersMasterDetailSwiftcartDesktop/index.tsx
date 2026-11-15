import React from 'react';
import Desktop from './Desktop';

export interface SellerOrdersMasterDetailSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOrdersMasterDetailSwiftcartDesktop: React.FC<SellerOrdersMasterDetailSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerOrdersMasterDetailSwiftcartDesktop;

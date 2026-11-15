import React from 'react';
import Desktop from './Desktop';

export interface SellerReturnsDisputesConsoleSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerReturnsDisputesConsoleSwiftcartDesktop: React.FC<SellerReturnsDisputesConsoleSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerReturnsDisputesConsoleSwiftcartDesktop;

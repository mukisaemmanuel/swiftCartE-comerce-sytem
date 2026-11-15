import React from 'react';
import Desktop from './Desktop';

export interface SellerOverviewSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerOverviewSwiftcartDesktop: React.FC<SellerOverviewSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerOverviewSwiftcartDesktop;

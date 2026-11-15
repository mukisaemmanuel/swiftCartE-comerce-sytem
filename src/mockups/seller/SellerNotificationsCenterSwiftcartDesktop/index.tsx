import React from 'react';
import Desktop from './Desktop';

export interface SellerNotificationsCenterSwiftcartDesktopProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerNotificationsCenterSwiftcartDesktop: React.FC<SellerNotificationsCenterSwiftcartDesktopProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerNotificationsCenterSwiftcartDesktop;

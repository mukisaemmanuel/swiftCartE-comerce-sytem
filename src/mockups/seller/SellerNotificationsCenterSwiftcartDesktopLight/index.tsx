import React from 'react';
import Desktop from './Desktop';

export interface SellerNotificationsCenterSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerNotificationsCenterSwiftcartDesktopLight: React.FC<SellerNotificationsCenterSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellerNotificationsCenterSwiftcartDesktopLight;

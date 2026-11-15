import React from 'react';
import Tablet from './Tablet';

export interface SellerNotificationsCenterTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerNotificationsCenterTabletLight: React.FC<SellerNotificationsCenterTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerNotificationsCenterTabletLight;

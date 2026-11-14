import React from 'react';
import Mobile from './Mobile';

export interface CourierBagQrScanConfirmationModalSwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CourierBagQrScanConfirmationModalSwiftcartWorkHub: React.FC<CourierBagQrScanConfirmationModalSwiftcartWorkHubProps> = (props) => {
  return <Mobile {...props} />;
};

export default CourierBagQrScanConfirmationModalSwiftcartWorkHub;

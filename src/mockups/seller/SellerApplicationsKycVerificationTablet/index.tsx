import React from 'react';
import Tablet from './Tablet';

export interface SellerApplicationsKycVerificationTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerApplicationsKycVerificationTablet: React.FC<SellerApplicationsKycVerificationTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerApplicationsKycVerificationTablet;

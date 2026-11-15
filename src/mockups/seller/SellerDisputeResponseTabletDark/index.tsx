import React from 'react';
import Tablet from './Tablet';

export interface SellerDisputeResponseTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerDisputeResponseTabletDark: React.FC<SellerDisputeResponseTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerDisputeResponseTabletDark;

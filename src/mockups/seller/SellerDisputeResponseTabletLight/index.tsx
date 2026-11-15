import React from 'react';
import Tablet from './Tablet';

export interface SellerDisputeResponseTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerDisputeResponseTabletLight: React.FC<SellerDisputeResponseTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default SellerDisputeResponseTabletLight;

import React from 'react';
import Mobile from './Mobile';

export interface SellerApplicationStatusProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellerApplicationStatus: React.FC<SellerApplicationStatusProps> = (props) => {
  return <Mobile {...props} />;
};

export default SellerApplicationStatus;

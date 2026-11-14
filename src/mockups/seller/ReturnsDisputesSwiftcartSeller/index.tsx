import React from 'react';
import Mobile from './Mobile';

export interface ReturnsDisputesSwiftcartSellerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ReturnsDisputesSwiftcartSeller: React.FC<ReturnsDisputesSwiftcartSellerProps> = (props) => {
  return <Mobile {...props} />;
};

export default ReturnsDisputesSwiftcartSeller;

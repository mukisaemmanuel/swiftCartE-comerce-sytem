import React from 'react';
import Mobile from './Mobile';

export interface ReturnsDisputesSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ReturnsDisputesSwiftcartUganda: React.FC<ReturnsDisputesSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default ReturnsDisputesSwiftcartUganda;

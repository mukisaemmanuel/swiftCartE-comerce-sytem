import React from 'react';
import Mobile from './Mobile';

export interface EarningsSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EarningsSwiftcartRider: React.FC<EarningsSwiftcartRiderProps> = (props) => {
  return <Mobile {...props} />;
};

export default EarningsSwiftcartRider;

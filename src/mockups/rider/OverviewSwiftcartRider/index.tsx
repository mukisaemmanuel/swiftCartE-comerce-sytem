import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartRiderProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartRider: React.FC<OverviewSwiftcartRiderProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartRider;

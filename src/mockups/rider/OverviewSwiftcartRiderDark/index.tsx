import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartRiderDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartRiderDark: React.FC<OverviewSwiftcartRiderDarkProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartRiderDark;

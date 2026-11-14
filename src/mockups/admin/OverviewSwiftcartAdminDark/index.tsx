import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartAdminDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartAdminDark: React.FC<OverviewSwiftcartAdminDarkProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartAdminDark;

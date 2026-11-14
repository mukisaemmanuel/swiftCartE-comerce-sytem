import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartSuperAdminDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartSuperAdminDark: React.FC<OverviewSwiftcartSuperAdminDarkProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartSuperAdminDark;

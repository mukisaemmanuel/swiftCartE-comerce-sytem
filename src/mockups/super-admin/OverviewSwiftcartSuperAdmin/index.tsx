import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartSuperAdmin: React.FC<OverviewSwiftcartSuperAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartSuperAdmin;

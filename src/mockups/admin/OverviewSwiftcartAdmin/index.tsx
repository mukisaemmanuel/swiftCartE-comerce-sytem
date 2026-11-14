import React from 'react';
import Mobile from './Mobile';

export interface OverviewSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverviewSwiftcartAdmin: React.FC<OverviewSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default OverviewSwiftcartAdmin;

import React from 'react';
import Mobile from './Mobile';

export interface LockedDispatchesSwiftcartAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const LockedDispatchesSwiftcartAdmin: React.FC<LockedDispatchesSwiftcartAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default LockedDispatchesSwiftcartAdmin;

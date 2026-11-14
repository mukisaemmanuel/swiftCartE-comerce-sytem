import React from 'react';
import Mobile from './Mobile';

export interface DangerZoneRoleChangeSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DangerZoneRoleChangeSwiftcartSuperAdmin: React.FC<DangerZoneRoleChangeSwiftcartSuperAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default DangerZoneRoleChangeSwiftcartSuperAdmin;

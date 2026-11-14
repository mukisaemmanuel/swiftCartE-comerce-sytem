import React from 'react';
import Mobile from './Mobile';

export interface PlatformSettingsSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PlatformSettingsSwiftcartSuperAdmin: React.FC<PlatformSettingsSwiftcartSuperAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default PlatformSettingsSwiftcartSuperAdmin;

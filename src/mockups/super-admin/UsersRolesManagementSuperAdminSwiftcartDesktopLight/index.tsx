import React from 'react';
import Desktop from './Desktop';

export interface UsersRolesManagementSuperAdminSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const UsersRolesManagementSuperAdminSwiftcartDesktopLight: React.FC<UsersRolesManagementSuperAdminSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default UsersRolesManagementSuperAdminSwiftcartDesktopLight;

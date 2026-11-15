import React from 'react';
import Desktop from './Desktop';

export interface UsersRolesManagementSuperAdminSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const UsersRolesManagementSuperAdminSwiftcartDesktopDark: React.FC<UsersRolesManagementSuperAdminSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default UsersRolesManagementSuperAdminSwiftcartDesktopDark;

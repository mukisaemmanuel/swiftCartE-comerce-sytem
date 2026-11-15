import React from 'react';
import Tablet from './Tablet';

export interface UsersRolesWithRoleChangeTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const UsersRolesWithRoleChangeTabletDark: React.FC<UsersRolesWithRoleChangeTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default UsersRolesWithRoleChangeTabletDark;

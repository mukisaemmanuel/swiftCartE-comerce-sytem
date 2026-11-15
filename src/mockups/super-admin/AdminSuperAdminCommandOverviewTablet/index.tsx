import React from 'react';
import Tablet from './Tablet';

export interface AdminSuperAdminCommandOverviewTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AdminSuperAdminCommandOverviewTablet: React.FC<AdminSuperAdminCommandOverviewTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default AdminSuperAdminCommandOverviewTablet;

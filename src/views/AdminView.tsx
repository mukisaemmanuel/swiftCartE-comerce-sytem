import React from 'react';
import DashboardShell from '../components/dashboard/DashboardShell';
import RoutePlaceholder from '../components/shared/RoutePlaceholder';
import type { RouteDefinition } from '../routes/types';
import { adminRoutes } from '../routes/admin';

export interface AdminViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const AdminView: React.FC<AdminViewProps> = ({ route, onNavigate }) => {
  const isSuperAdmin = route.role === 'super-admin';

  return (
    <DashboardShell
      role={isSuperAdmin ? 'super-admin' : 'admin'}
      currentPath={route.path}
      onNavigate={onNavigate}
      title={route.name}
      userName={isSuperAdmin ? 'Platform Director' : 'Operations Lead'}
      userEmail={isSuperAdmin ? 'director@swiftcart.ug' : 'admin@swiftcart.ug'}
    >
      <RoutePlaceholder
        route={route}
        onNavigate={onNavigate}
        siblingRoutes={adminRoutes}
      />
    </DashboardShell>
  );
};

export default AdminView;

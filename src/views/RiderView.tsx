import React from 'react';
import FieldShell from '../components/field/FieldShell';
import RoutePlaceholder from '../components/shared/RoutePlaceholder';
import type { RouteDefinition } from '../routes/types';
import { riderRoutes } from '../routes/rider';

export interface RiderViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const RiderView: React.FC<RiderViewProps> = ({ route, onNavigate }) => {
  return (
    <FieldShell
      role="rider"
      currentPath={route.path}
      onNavigate={onNavigate}
      title={route.name}
      isOnline={true}
    >
      <RoutePlaceholder
        route={route}
        onNavigate={onNavigate}
        siblingRoutes={riderRoutes}
      />
    </FieldShell>
  );
};

export default RiderView;

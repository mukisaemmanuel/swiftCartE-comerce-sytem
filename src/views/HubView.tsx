import React from 'react';
import FieldShell from '../components/field/FieldShell';
import RoutePlaceholder from '../components/shared/RoutePlaceholder';
import type { RouteDefinition } from '../routes/types';
import { hubRoutes } from '../routes/hub';

export interface HubViewProps {
  route: RouteDefinition;
  onNavigate: (path: string) => void;
}

export const HubView: React.FC<HubViewProps> = ({ route, onNavigate }) => {
  return (
    <FieldShell
      role="hub"
      currentPath={route.path}
      onNavigate={onNavigate}
      title={route.name}
      isOnline={true}
    >
      <RoutePlaceholder
        route={route}
        onNavigate={onNavigate}
        siblingRoutes={hubRoutes}
      />
    </FieldShell>
  );
};

export default HubView;

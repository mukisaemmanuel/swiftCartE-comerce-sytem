import React from 'react';
import Mobile from './Mobile';

export interface AdminOrderDetailOversightLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AdminOrderDetailOversightLight: React.FC<AdminOrderDetailOversightLightProps> = (props) => {
  return <Mobile {...props} />;
};

export default AdminOrderDetailOversightLight;

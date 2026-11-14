import React from 'react';
import Mobile from './Mobile';

export interface AdminOrderDetailOversightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AdminOrderDetailOversight: React.FC<AdminOrderDetailOversightProps> = (props) => {
  return <Mobile {...props} />;
};

export default AdminOrderDetailOversight;

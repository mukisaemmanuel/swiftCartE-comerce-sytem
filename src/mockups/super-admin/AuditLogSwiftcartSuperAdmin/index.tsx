import React from 'react';
import Mobile from './Mobile';

export interface AuditLogSwiftcartSuperAdminProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSwiftcartSuperAdmin: React.FC<AuditLogSwiftcartSuperAdminProps> = (props) => {
  return <Mobile {...props} />;
};

export default AuditLogSwiftcartSuperAdmin;

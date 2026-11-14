import React from 'react';
import Mobile from './Mobile';

export interface AuditLogSwiftcartAdmin2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSwiftcartAdmin2: React.FC<AuditLogSwiftcartAdmin2Props> = (props) => {
  return <Mobile {...props} />;
};

export default AuditLogSwiftcartAdmin2;

import React from 'react';
import Mobile from './Mobile';

export interface AuditLogSwiftcartAdmin1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSwiftcartAdmin1: React.FC<AuditLogSwiftcartAdmin1Props> = (props) => {
  return <Mobile {...props} />;
};

export default AuditLogSwiftcartAdmin1;

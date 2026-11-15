import React from 'react';
import Tablet from './Tablet';

export interface AuditLogSecurityLedgerTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSecurityLedgerTabletDark: React.FC<AuditLogSecurityLedgerTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default AuditLogSecurityLedgerTabletDark;

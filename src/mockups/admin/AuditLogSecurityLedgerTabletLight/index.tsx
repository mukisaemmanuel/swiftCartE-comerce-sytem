import React from 'react';
import Tablet from './Tablet';

export interface AuditLogSecurityLedgerTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSecurityLedgerTabletLight: React.FC<AuditLogSecurityLedgerTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default AuditLogSecurityLedgerTabletLight;

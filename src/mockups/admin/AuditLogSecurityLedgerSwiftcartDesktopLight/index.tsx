import React from 'react';
import Desktop from './Desktop';

export interface AuditLogSecurityLedgerSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSecurityLedgerSwiftcartDesktopLight: React.FC<AuditLogSecurityLedgerSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default AuditLogSecurityLedgerSwiftcartDesktopLight;

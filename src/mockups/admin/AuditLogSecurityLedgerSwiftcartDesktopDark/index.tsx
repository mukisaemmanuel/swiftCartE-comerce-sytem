import React from 'react';
import Desktop from './Desktop';

export interface AuditLogSecurityLedgerSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AuditLogSecurityLedgerSwiftcartDesktopDark: React.FC<AuditLogSecurityLedgerSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default AuditLogSecurityLedgerSwiftcartDesktopDark;

import React from 'react';
import Desktop from './Desktop';

export interface SellersDirectoryAccountGovernanceSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellersDirectoryAccountGovernanceSwiftcartDesktopDark: React.FC<SellersDirectoryAccountGovernanceSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellersDirectoryAccountGovernanceSwiftcartDesktopDark;

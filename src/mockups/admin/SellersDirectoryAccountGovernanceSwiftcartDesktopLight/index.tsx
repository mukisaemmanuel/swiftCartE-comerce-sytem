import React from 'react';
import Desktop from './Desktop';

export interface SellersDirectoryAccountGovernanceSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SellersDirectoryAccountGovernanceSwiftcartDesktopLight: React.FC<SellersDirectoryAccountGovernanceSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default SellersDirectoryAccountGovernanceSwiftcartDesktopLight;

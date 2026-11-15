import React from 'react';
import Desktop from './Desktop';

export interface HubStorageAgingMatrixSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStorageAgingMatrixSwiftcartDesktopDark: React.FC<HubStorageAgingMatrixSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubStorageAgingMatrixSwiftcartDesktopDark;

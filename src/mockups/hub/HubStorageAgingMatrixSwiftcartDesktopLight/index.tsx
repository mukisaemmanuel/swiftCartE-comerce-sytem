import React from 'react';
import Desktop from './Desktop';

export interface HubStorageAgingMatrixSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubStorageAgingMatrixSwiftcartDesktopLight: React.FC<HubStorageAgingMatrixSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubStorageAgingMatrixSwiftcartDesktopLight;

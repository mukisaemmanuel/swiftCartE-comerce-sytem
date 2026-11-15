import React from 'react';
import Tablet from './Tablet';

export interface PlatformSettingsFeeMatrixTabletDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PlatformSettingsFeeMatrixTabletDark: React.FC<PlatformSettingsFeeMatrixTabletDarkProps> = (props) => {
  return <Tablet {...props} />;
};

export default PlatformSettingsFeeMatrixTabletDark;

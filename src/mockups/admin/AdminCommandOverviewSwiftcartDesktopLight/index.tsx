import React from 'react';
import Desktop from './Desktop';

export interface AdminCommandOverviewSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AdminCommandOverviewSwiftcartDesktopLight: React.FC<AdminCommandOverviewSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default AdminCommandOverviewSwiftcartDesktopLight;

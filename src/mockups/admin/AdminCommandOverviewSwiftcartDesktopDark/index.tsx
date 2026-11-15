import React from 'react';
import Desktop from './Desktop';

export interface AdminCommandOverviewSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const AdminCommandOverviewSwiftcartDesktopDark: React.FC<AdminCommandOverviewSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default AdminCommandOverviewSwiftcartDesktopDark;

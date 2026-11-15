import React from 'react';
import Desktop from './Desktop';

export interface OverpaymentsRefundsConsoleSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverpaymentsRefundsConsoleSwiftcartDesktopDark: React.FC<OverpaymentsRefundsConsoleSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default OverpaymentsRefundsConsoleSwiftcartDesktopDark;

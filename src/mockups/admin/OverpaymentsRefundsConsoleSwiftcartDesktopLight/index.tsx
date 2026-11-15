import React from 'react';
import Desktop from './Desktop';

export interface OverpaymentsRefundsConsoleSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverpaymentsRefundsConsoleSwiftcartDesktopLight: React.FC<OverpaymentsRefundsConsoleSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default OverpaymentsRefundsConsoleSwiftcartDesktopLight;

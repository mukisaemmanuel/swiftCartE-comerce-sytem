import React from 'react';
import Desktop from './Desktop';

export interface HubCustomerPickupHandoverConsoleSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubCustomerPickupHandoverConsoleSwiftcartDesktopDark: React.FC<HubCustomerPickupHandoverConsoleSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubCustomerPickupHandoverConsoleSwiftcartDesktopDark;

import React from 'react';
import Desktop from './Desktop';

export interface HubCustomerPickupHandoverConsoleSwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubCustomerPickupHandoverConsoleSwiftcartDesktopLight: React.FC<HubCustomerPickupHandoverConsoleSwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubCustomerPickupHandoverConsoleSwiftcartDesktopLight;

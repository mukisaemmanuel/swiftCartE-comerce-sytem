import React from 'react';
import Desktop from './Desktop';

export interface PayoutQueueTelecomSettlementsSwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PayoutQueueTelecomSettlementsSwiftcartDesktopDark: React.FC<PayoutQueueTelecomSettlementsSwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default PayoutQueueTelecomSettlementsSwiftcartDesktopDark;

import React from 'react';
import Desktop from './Desktop';

export interface HubDamagedGoodsQuarantineBaySwiftcartDesktopDarkProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubDamagedGoodsQuarantineBaySwiftcartDesktopDark: React.FC<HubDamagedGoodsQuarantineBaySwiftcartDesktopDarkProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubDamagedGoodsQuarantineBaySwiftcartDesktopDark;

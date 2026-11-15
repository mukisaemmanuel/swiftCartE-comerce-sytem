import React from 'react';
import Desktop from './Desktop';

export interface HubDamagedGoodsQuarantineBaySwiftcartDesktopLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubDamagedGoodsQuarantineBaySwiftcartDesktopLight: React.FC<HubDamagedGoodsQuarantineBaySwiftcartDesktopLightProps> = (props) => {
  return <Desktop {...props} />;
};

export default HubDamagedGoodsQuarantineBaySwiftcartDesktopLight;

import React from 'react';
import Tablet from './Tablet';

export interface HubDamagedGoodsQuarantineBayTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubDamagedGoodsQuarantineBayTablet: React.FC<HubDamagedGoodsQuarantineBayTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default HubDamagedGoodsQuarantineBayTablet;

import React from 'react';
import Tablet from './Tablet';

export interface HubDamagedGoodsQuarantineBayTabletLight1Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubDamagedGoodsQuarantineBayTabletLight1: React.FC<HubDamagedGoodsQuarantineBayTabletLight1Props> = (props) => {
  return <Tablet {...props} />;
};

export default HubDamagedGoodsQuarantineBayTabletLight1;

import React from 'react';
import Tablet from './Tablet';

export interface HubDamagedGoodsQuarantineBayTabletLight2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HubDamagedGoodsQuarantineBayTabletLight2: React.FC<HubDamagedGoodsQuarantineBayTabletLight2Props> = (props) => {
  return <Tablet {...props} />;
};

export default HubDamagedGoodsQuarantineBayTabletLight2;

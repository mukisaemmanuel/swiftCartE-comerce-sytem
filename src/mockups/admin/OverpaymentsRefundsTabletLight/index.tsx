import React from 'react';
import Tablet from './Tablet';

export interface OverpaymentsRefundsTabletLightProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const OverpaymentsRefundsTabletLight: React.FC<OverpaymentsRefundsTabletLightProps> = (props) => {
  return <Tablet {...props} />;
};

export default OverpaymentsRefundsTabletLight;

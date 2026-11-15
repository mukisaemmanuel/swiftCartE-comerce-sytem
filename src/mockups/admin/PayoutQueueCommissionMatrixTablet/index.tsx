import React from 'react';
import Tablet from './Tablet';

export interface PayoutQueueCommissionMatrixTabletProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const PayoutQueueCommissionMatrixTablet: React.FC<PayoutQueueCommissionMatrixTabletProps> = (props) => {
  return <Tablet {...props} />;
};

export default PayoutQueueCommissionMatrixTablet;

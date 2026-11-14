import React from 'react';
import Mobile from './Mobile';

export interface ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHubProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHub: React.FC<ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHubProps> = (props) => {
  return <Mobile {...props} />;
};

export default ReturnsDamagedGoodsQuarantineBaySwiftcartWorkHub;

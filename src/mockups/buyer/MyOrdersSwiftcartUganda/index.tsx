import React from 'react';
import Mobile from './Mobile';

export interface MyOrdersSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MyOrdersSwiftcartUganda: React.FC<MyOrdersSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default MyOrdersSwiftcartUganda;

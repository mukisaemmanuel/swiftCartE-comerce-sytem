import React from 'react';
import Mobile from './Mobile';

export interface ScanQrHandoverSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ScanQrHandoverSwiftcartUganda: React.FC<ScanQrHandoverSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default ScanQrHandoverSwiftcartUganda;

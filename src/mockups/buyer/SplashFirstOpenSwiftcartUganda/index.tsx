import React from 'react';
import Mobile from './Mobile';

export interface SplashFirstOpenSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SplashFirstOpenSwiftcartUganda: React.FC<SplashFirstOpenSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default SplashFirstOpenSwiftcartUganda;

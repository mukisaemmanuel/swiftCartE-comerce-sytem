import React from 'react';
import Mobile from './Mobile';

export interface SplashWelcomeSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SplashWelcomeSwiftcartUganda: React.FC<SplashWelcomeSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default SplashWelcomeSwiftcartUganda;

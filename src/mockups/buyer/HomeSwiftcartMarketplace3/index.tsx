import React from 'react';
import Mobile from './Mobile';

export interface HomeSwiftcartMarketplace3Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HomeSwiftcartMarketplace3: React.FC<HomeSwiftcartMarketplace3Props> = (props) => {
  return <Mobile {...props} />;
};

export default HomeSwiftcartMarketplace3;

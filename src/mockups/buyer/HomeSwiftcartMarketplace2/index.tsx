import React from 'react';
import Mobile from './Mobile';

export interface HomeSwiftcartMarketplace2Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const HomeSwiftcartMarketplace2: React.FC<HomeSwiftcartMarketplace2Props> = (props) => {
  return <Mobile {...props} />;
};

export default HomeSwiftcartMarketplace2;

import React from 'react';
import Mobile from './Mobile';

export interface CategoriesSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CategoriesSwiftcartUganda: React.FC<CategoriesSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default CategoriesSwiftcartUganda;

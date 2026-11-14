import React from 'react';
import Mobile from './Mobile';

export interface SearchExperienceSwiftcartUgandaProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SearchExperienceSwiftcartUganda: React.FC<SearchExperienceSwiftcartUgandaProps> = (props) => {
  return <Mobile {...props} />;
};

export default SearchExperienceSwiftcartUganda;

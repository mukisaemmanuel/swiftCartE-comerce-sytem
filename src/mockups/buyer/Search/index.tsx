// Auto-generated responsive container for Search
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Tablet from './Tablet';
import Desktop from './Desktop';

export interface SearchProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Search: React.FC<SearchProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Desktop {...props} />;
};

export default Search;

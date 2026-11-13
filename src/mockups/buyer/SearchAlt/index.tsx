// Auto-generated responsive container for SearchAlt
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Tablet from './Tablet';
import Desktop from './Desktop';

export interface SearchAltProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const SearchAlt: React.FC<SearchAltProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Tablet {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Desktop {...props} />;
};

export default SearchAlt;

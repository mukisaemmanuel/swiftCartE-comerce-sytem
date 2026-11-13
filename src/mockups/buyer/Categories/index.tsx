// Auto-generated responsive container for Categories
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Tablet from './Tablet';
import Desktop from './Desktop';

export interface CategoriesProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Categories: React.FC<CategoriesProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Desktop {...props} />;
};

export default Categories;

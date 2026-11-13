// Auto-generated responsive container for CategoriesAlt
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Desktop from './Desktop';

export interface CategoriesAltProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const CategoriesAlt: React.FC<CategoriesAltProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Desktop {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default CategoriesAlt;

// Auto-generated responsive container for Store
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Desktop from './Desktop';

export interface StoreProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Store: React.FC<StoreProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Desktop {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default Store;

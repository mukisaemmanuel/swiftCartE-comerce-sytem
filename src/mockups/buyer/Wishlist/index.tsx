// Auto-generated responsive container for Wishlist
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Tablet from './Tablet';

export interface WishlistProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const Wishlist: React.FC<WishlistProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Tablet {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }

  return <Tablet {...props} />;
};

export default Wishlist;

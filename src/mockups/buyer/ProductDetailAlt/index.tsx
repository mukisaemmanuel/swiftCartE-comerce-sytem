// Auto-generated responsive container for ProductDetailAlt
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Desktop from './Desktop';

export interface ProductDetailAltProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ProductDetailAlt: React.FC<ProductDetailAltProps> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Desktop {...props} />;
  }

  if (breakpoint === 'tablet') {
    return <Desktop {...props} />;
  }

  return <Desktop {...props} />;
};

export default ProductDetailAlt;

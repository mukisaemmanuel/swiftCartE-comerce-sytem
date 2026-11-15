// Auto-generated responsive container for Home
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
import Mobile from './Mobile';
import Desktop from './Desktop';
import HomeAltDesktop from '../HomeAlt/Desktop';

export interface HomeProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
  variant?: 'home1' | 'home2';
}

export const Home: React.FC<HomeProps> = ({ variant = 'home2', ...props }) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return <Mobile {...props} />;
  }

  if (variant === 'home1') {
    return <Desktop {...props} />;
  }

  return <HomeAltDesktop {...props} />;
};

export default Home;

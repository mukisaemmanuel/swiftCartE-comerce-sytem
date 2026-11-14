import React from 'react';
import Mobile from './Mobile';

export interface MtnMomoUssd165PinPromptProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const MtnMomoUssd165PinPrompt: React.FC<MtnMomoUssd165PinPromptProps> = (props) => {
  return <Mobile {...props} />;
};

export default MtnMomoUssd165PinPrompt;

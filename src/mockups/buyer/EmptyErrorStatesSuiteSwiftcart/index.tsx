import React from 'react';
import Mobile from './Mobile';

export interface EmptyErrorStatesSuiteSwiftcartProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EmptyErrorStatesSuiteSwiftcart: React.FC<EmptyErrorStatesSuiteSwiftcartProps> = (props) => {
  return <Mobile {...props} />;
};

export default EmptyErrorStatesSuiteSwiftcart;

import React from 'react';
import Mobile from './Mobile';

export interface DamagedParcelQuarantineBayIntakeSwiftcartHubAgentProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const DamagedParcelQuarantineBayIntakeSwiftcartHubAgent: React.FC<DamagedParcelQuarantineBayIntakeSwiftcartHubAgentProps> = (props) => {
  return <Mobile {...props} />;
};

export default DamagedParcelQuarantineBayIntakeSwiftcartHubAgent;

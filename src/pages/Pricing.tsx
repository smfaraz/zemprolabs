import React from 'react';
import { ProjectEstimation } from './ProjectEstimation';

// Re-export ProjectEstimation as Pricing for backward compatibility with existing imports
export const Pricing: React.FC = () => {
  return <ProjectEstimation />;
};

export default Pricing;

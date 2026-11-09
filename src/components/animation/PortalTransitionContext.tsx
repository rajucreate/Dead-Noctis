import { createContext, useContext } from 'react';

export interface PortalTransitionContextType {
  triggerTransition: (onComplete?: () => void) => void;
  isTransitioning: boolean;
}

export const PortalTransitionContext = createContext<PortalTransitionContextType>({
  triggerTransition: () => {},
  isTransitioning: false,
});

export const usePortalTransition = () => useContext(PortalTransitionContext);

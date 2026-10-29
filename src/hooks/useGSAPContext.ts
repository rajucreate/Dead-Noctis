import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * React hook wrapper around gsap.context() ensuring reliable cleanup and selector scoping.
 *
 * @param callback Function where GSAP tweens/timelines are initialized
 * @param scope Optional target element ref or selector scope
 */
export function useGSAPContext(
  callback: (context: gsap.Context) => void,
  scope?: React.RefObject<HTMLElement | null>
) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      callbackRef.current(self);
    }, scope?.current ?? undefined);

    return () => ctx.revert();
  }, [scope]);
}

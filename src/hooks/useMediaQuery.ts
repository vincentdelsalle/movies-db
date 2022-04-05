import { useLayoutEffect, useState } from 'react';

const phoneLimit = 570;
const tabletLimit = 830;
const desktopLimit = 1080;

export const matchMediaQueryList = {
  mobile: `(max-width: ${phoneLimit}px)`,
  tablet: `(min-width:${phoneLimit + 1}px) and (max-width: ${tabletLimit}px)`,
  desktop: `(min-width:${tabletLimit + 1}px) and (max-width: ${desktopLimit}px)`,
  large: `(min-width:${desktopLimit + 1}px)`,
};

export type MatchBreakpointsType = 'mobile' | 'tablet' | 'desktop' | 'large';

export const useMediaQuery = (query: MatchBreakpointsType) => {
  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia(matchMediaQueryList[query]);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

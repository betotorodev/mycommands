import { useEffect, useState } from 'react'

export enum Breakpoints {
  extraSmall = '(max-width: 650px)',
  small = '(min-width: 650px)',
  medium = '(min-width: 960px)',
  large = '(min-width: 1280px)',
  xLarge = '(min-width: 1400px)',
}

export const useMediaQuery = (query: string): boolean => {
  let mediaMatch: MediaQueryList
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    mediaMatch = window.matchMedia(query)
    setMatches(mediaMatch.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mediaMatch.addEventListener('change', handler)
    return () => mediaMatch.removeEventListener('change', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return matches
};

export const useXXLargeBreakpoint = () => useMediaQuery(Breakpoints.extraSmall)
export const useSmallBreakpoint = () => useMediaQuery(Breakpoints.small)
export const useMediumBreakpoint = () => useMediaQuery(Breakpoints.medium)
export const useLargeBreakpoint = () => useMediaQuery(Breakpoints.large)
export const useXLargeBreakpoint = () => useMediaQuery(Breakpoints.xLarge)

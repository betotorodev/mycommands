import { useCallback, useState } from 'react';

const useToggle = (initialState: boolean = false): {state: boolean, toggle: () => void} => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((): void => setState(state => !state), []);
  return {state, toggle}
}
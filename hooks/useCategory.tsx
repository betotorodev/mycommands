import { useCallback, useState } from 'react'

export const useCategory = (): [string, (contents: string) => void] => {
  const [state, setState] = useState<string>('')

  const handleCategory = useCallback(
    (content: string): void => setState(content),
    []
  )
  return [state, handleCategory]
}

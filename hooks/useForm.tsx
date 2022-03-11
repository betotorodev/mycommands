import { useCallback, useContext } from 'react'
import valuesContext from 'context/valuesContext'

export const useForm = (): [
  any,
  (attribute: string, content: any) => void
] => {
  const { command, setCommand } = useContext(valuesContext)

  const handleCommand = useCallback((attribute, content): void => {
    setCommand((prevState) => {
      return {
        ...prevState,
        [attribute]: content
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [command, handleCommand]
}

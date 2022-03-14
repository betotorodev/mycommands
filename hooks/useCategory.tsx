import { useCallback, useState, useContext, SetStateAction, Dispatch } from 'react'

import valuesContext from 'context/valuesContext'

export const useCategory = (): {
  categoryValue: string
  handleCategoryValue: (contents: string) => void
  setIsCategoryRepeated: Dispatch<SetStateAction<boolean>>
  isCategoryRepeated: boolean
} => {
  const [categoryValue, setState] = useState<string>('')
  const { isCategoryRepeated, setIsCategoryRepeated } =
    useContext(valuesContext)

  const handleCategoryValue = useCallback(
    (content: string): void => setState(content),
    []
  )
  return {
    categoryValue,
    handleCategoryValue,
    setIsCategoryRepeated,
    isCategoryRepeated
  }
}

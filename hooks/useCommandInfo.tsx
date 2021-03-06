import Context from "context/commandInfoContext"
import { useContext } from "react"

export const useCommandInfo = () => {
  const {
    id,
    setId,
    listOfCommands,
    setListOfCommands,
    listOfCategories,
    setListOfCategories,
    originalData,
    setOriginalData
  } = useContext(Context)

  return {
    id,
    setId,
    listOfCommands,
    setListOfCommands,
    listOfCategories,
    setListOfCategories,
    originalData,
    setOriginalData
  }
}

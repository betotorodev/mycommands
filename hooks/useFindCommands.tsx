import Context from "context/commandInfoContext"
import { useContext } from "react"

export const useFindCommands = (): {
  findByWord: (word: string) => void,
  findByCategory: (word: string) => void
} => {

  const {
    setListOfCommands,
    originalData
  } = useContext(Context)



  const findByWord = (word: string) => {
    const commands = originalData?.filter((command: any) => command.text?.includes(word))
    setListOfCommands(commands)
  }

  const findByCategory = (category: string) => {
    if (category === "all") {
      setListOfCommands(originalData)
    } else {
      const commands = originalData.filter(command => command.category === category)
      setListOfCommands(commands)
    }
  }

  return {
    findByWord,
    findByCategory
  }
}

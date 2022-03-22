import Context from "context/commandInfoContext"
import { useContext } from "react"

export const useFindCommands = (): {
  findByWord: (word: string) => void,
  findByCategory: (word: string) => void
} => {

  const {
    listOfCommands,
    setListOfCommands,
    originalData
  } = useContext(Context)



  const findByWord = (word: string) => {
    const commands = originalData?.filter((command: any) => command.text?.includes(word))
    // if (word === '') setListOfCommands(originalDataParsed)
    if (word === '') console.log(originalData)
    setListOfCommands(commands)
  }

  const findByCategory = (category: string) => {
    const commands = listOfCommands.filter(command => command.category === category)
    return commands
  }

  return {
    findByWord,
    findByCategory
  }
}

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface CommandInfo {
  id: string
  setId: Dispatch<SetStateAction<string>>
  listOfCommands: Array<any>
  setListOfCommands: Dispatch<SetStateAction<any>>
  listOfCategories: Array<any>
  setListOfCategories: Dispatch<SetStateAction<any>>
}

const defaultState = {
  id: "",
  setId: () => { },
  listOfCommands: [],
  setListOfCommands: () => { },
  listOfCategories: [],
  setListOfCategories: () => { },
}

const Context = createContext<CommandInfo>(defaultState)

export function CommandInfoProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState('')
  const [listOfCommands, setListOfCommands] = useState([])
  const [listOfCategories, setListOfCategories] = useState([])

  const values = {
    id,
    setId,
    listOfCommands,
    setListOfCommands,
    listOfCategories,
    setListOfCategories
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default Context
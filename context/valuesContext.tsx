import { createContext, SetStateAction, useState, Dispatch } from "react";

export type CommandValues = {
  id?: string;
  text: string;
  description: string;
  category: string;
}

interface valuesContext {
  command: CommandValues;
  setCommand: Dispatch<SetStateAction<Object>>;
  isCategoryRepeated: boolean;
  setIsCategoryRepeated: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  command: {
    text: '',
    description: '',
    category: '',
  },
  setCommand: () => { },
  isCategoryRepeated: false,
  setIsCategoryRepeated: () => { }
}

const Context = createContext<valuesContext>(defaultState)

export function CommandValuesProvider({ children }: { children: React.ReactNode }) {
  const [command, setCommand] = useState<any>()
  const [isCategoryRepeated, setIsCategoryRepeated] = useState<boolean>(false)

  const values = {
    command,
    setCommand,
    isCategoryRepeated,
    setIsCategoryRepeated
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default Context
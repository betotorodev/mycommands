import { createContext, SetStateAction, useState, Dispatch } from "react";

export type CommandValues = {
  text: string;
  description: string;
  category: string;
}

interface valuesContext {
  command: CommandValues;
  setCommand: Dispatch<SetStateAction<Object>>;
}

const defaultState = {
  command: {
    text: '',
    description: '',
    category: '',
  },
  setCommand: () => { },
}

const Context = createContext<valuesContext>(defaultState)

export function CommandValuesProvider({ children }: { children: React.ReactNode }) {
  const [command, setCommand] = useState<any>()
  return <Context.Provider value={{ command, setCommand }}>
    {children}
  </Context.Provider>
}

export default Context
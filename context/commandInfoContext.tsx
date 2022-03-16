import { createContext, Dispatch, SetStateAction, useState } from "react";

interface CommandInfo {
  id: string;
  setId: Dispatch<SetStateAction<string>>
}

const defaultState = {
  id: "",
  setId: () => { },
}

const Context = createContext<CommandInfo>(defaultState)

export function CommandInfoProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState('')

  const values = {
    id,
    setId
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default Context
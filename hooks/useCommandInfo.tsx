import Context from "context/commandInfoContext"
import { useContext } from "react"

export const useCommandInfo = () => {
  const { id, setId } = useContext(Context)

  return { id, setId }
}

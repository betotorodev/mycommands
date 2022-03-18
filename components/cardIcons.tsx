import { useState, VFC } from 'react'
import { Trash } from 'iconoir-react'
import { useCommandInfo } from 'hooks/useCommandInfo'

interface CardIconsData {
  id: string
}

export const CardIcons: VFC<CardIconsData> = ({ id }) => {
  const [loading, setLoading] = useState(false)
  const { setListOfCommands, listOfCommands } = useCommandInfo()
  const deleteCommandInLocal = (id: string) => {
    const refreshListOfCommands = listOfCommands.filter(command => {
      return command.id !== id
    })
    return refreshListOfCommands
  }
  const handleDelete = async () => {
    const newArray = deleteCommandInLocal(id)
    setLoading(true)
    await fetch(`/api/delete/${id}`, {
      method: 'DELETE',
    })
      .then((info) => {
        console.log(info)
        setLoading(false)
        console.log(newArray)
        setListOfCommands(newArray)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <Trash onClick={handleDelete} style={{ cursor: 'pointer' }} color="#f21361" />
      {loading && 'loading'}
    </div>
  )
}

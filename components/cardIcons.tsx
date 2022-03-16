import { useState, VFC } from 'react'
import { useRouter } from 'next/router'
import { Trash, ArrowDown, ArrowUp } from 'iconoir-react'
import { CLIENT_RENEG_LIMIT } from 'tls'

interface CardIconsData {
  id: string
}

export const CardIcons: VFC<CardIconsData> = ({ id }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const handleDelete = async () => {
    setLoading(true)
    await fetch(`/api/delete/${id}`, {
      method: 'DELETE',
    })
      .then((info) => {
        console.log(info)
        setLoading(false)
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

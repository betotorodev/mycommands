import { Card } from '@nextui-org/react'
import { useCommandInfo } from 'hooks/useCommandInfo'

export const ListOfCategories = () => {
  const { listOfCategories } = useCommandInfo()
  return (
    <Card css={{ position: 'absolute', bottom: '-124px', right: '6px', zIndex: '1', backgroundColor: '#f4f4f4' }}>
      <ul style={{ margin: '0', textAlign: 'center' }}>
        {
          listOfCategories.map(((category: any) => {
            return (
              <li key={category.id}>{category.name}</li>
            )
          }))
        }
      </ul>
    </Card>
  )
}

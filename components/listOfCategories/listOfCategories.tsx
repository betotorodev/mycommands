import { Card } from '@nextui-org/react'
import { useCommandInfo } from 'hooks/useCommandInfo'
import styles from './styles.module.css'

export const ListOfCategories = () => {
  const { listOfCategories } = useCommandInfo()
  return (
    <Card css={{
      position: 'absolute',
      top: '105%',
      right: '6px',
      zIndex: '1',
      backgroundColor: '#f4f4f4'
    }}>
      <ul style={{ margin: '0', textAlign: 'center' }}>
        {
          listOfCategories.map(((category: any) => {
            return (
              <li className={styles.list} key={category.id}>{category.name}</li>
            )
          }))
        }
      </ul>
    </Card>
  )
}

import { Card } from '@nextui-org/react'
import { useToggle } from 'hooks'
import { useCommandInfo } from 'hooks/useCommandInfo'
import { useFindCommands } from 'hooks/useFindCommands'
import { ArrowDown, ArrowUp } from 'iconoir-react'
import { useState } from 'react'
import styles from './styles.module.css'

export const ListOfCategories = () => {
  const [categoryClicked, setCategoryClicked] = useState('all')
  const [toggle, handleModal] = useToggle()
  const { listOfCategories } = useCommandInfo()
  const { findByCategory } = useFindCommands()
  const handleCategoryClick = (name: string) => {
    findByCategory(name)
    setCategoryClicked(name)
  }
  return (
    <>
      <div onClick={handleModal} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: ' 8px 12px',
        borderRadius: '0.75rem',
        backgroundColor: '#f4f4f4',
      }}>
        {categoryClicked}
        {toggle && <ArrowUp />}
        {!toggle && <ArrowDown />}
      </div>
      {toggle &&
        <Card css={{
          position: 'absolute',
          top: '105%',
          right: '6px',
          zIndex: '1',
          backgroundColor: '#f4f4f4'
        }}>
          <ul style={{ margin: '0', textAlign: 'center' }}>
            <li
              className={styles.list}
              onClick={() => handleCategoryClick('all')}
            >
              all
            </li>
            {
              listOfCategories.map(((category: any) => {
                return (
                  <>
                    <li
                      className={styles.list}
                      key={category.id}
                      onClick={() => handleCategoryClick(category.name)}
                    >{category.name}</li>
                  </>
                )
              }))
            }
          </ul>
        </Card>
      }
    </>
  )
}

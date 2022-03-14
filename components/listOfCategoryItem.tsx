import { useState, ChangeEvent, KeyboardEvent, MouseEventHandler } from 'react'
import {
  Text,
  Container,
  Spacer,
  Grid,
  Card,
  Input,
  FormElement
} from '@nextui-org/react'
import { CategoryItem } from 'components/categoryItem'
import { useForm, useCategory } from 'hooks/index'

export const ListOfCategoryItem = ({ categories }: any) => {
  const [id, setId] = useState(0)
  const [categoryValue, handleCategoryValue] = useCategory()
  const [_, handleInputValue] = useForm()
  const [newCategory, setNewCategory] = useState(categories)

  const handleCategoryChange = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target
    handleCategoryValue(value)
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInputValue('category', categoryValue)
      setNewCategory((prevState: any) => {
        return [
          ...prevState,
          {
            name: categoryValue
          }
        ]
      })
      handleCategoryValue('')
    }
  }

  return (
    <Container>
      <Text
        small
        css={{ marginLeft: '7px', fontFamily: 'mono', fontWeight: 'light' }}
      >
        Elige una categoría
      </Text>
      <Spacer y={0.3} />
      <Card shadow={false} css={{ backgroundColor: '#f4f4f4' }}>
        <Grid.Container gap={1}>
          {newCategory.map((category: any, index: number) => {
            return (
              <Grid onClick={() => setId(category.id)} key={index}>
                <CategoryItem
                  title={category.name}
                  checked={id === category.id}
                />
              </Grid>
            )
          })}
          <Grid sm={2}>
            <Input
              onChange={handleCategoryChange}
              onKeyDown={handleKeyDown}
              clearable
              placeholder='otro...'
              aria-label='add new category'
              value={categoryValue}
            />
          </Grid>
        </Grid.Container>
      </Card>
    </Container>
  )
}

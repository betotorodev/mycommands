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
import {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef
} from 'react'

export const ListOfCategoryItem = ({ categories }: any) => {
  let category = useRef('')
  const [newCategory, setNewCategory] = useState(categories)
  const handleCategoryChange = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target
    category.current = value
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setNewCategory((prevState: any) => {
        return [
          ...prevState,
          {
            id: 'w',
            name: category.current
          }
        ]
      })
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
              <Grid
                onClick={() => console.log(category.id)}
                key={index}
              >
                <CategoryItem title={category.name} />
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
            />
          </Grid>
        </Grid.Container>
      </Card>
    </Container >
  )
}

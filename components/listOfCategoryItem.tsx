import { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react'
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
import { makeRandomID } from 'utils/utils'
import { useCommandInfo } from 'hooks/useCommandInfo'

export const ListOfCategoryItem = () => {
  const { listOfCategories } = useCommandInfo()
  console.log(listOfCategories)
  const [id, setId] = useState('')
  const { categoryValue, handleCategoryValue, setIsCategoryRepeated } = useCategory()
  const [_, handleInputValue] = useForm()
  const [newCategory, setNewCategory] = useState(listOfCategories)
  const isRepeated = (name: string) => {
    return newCategory.some(
      (item: any) => item.name === name
    )
  }
  useEffect(() => {
    setNewCategory(listOfCategories)
  }, [listOfCategories])


  const handleCategoryChange = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target
    handleCategoryValue(value)
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    const categoryValueRepeated = isRepeated(categoryValue)
    if (e.key === 'Enter' && !categoryValueRepeated) {
      const temporalId = makeRandomID()
      handleInputValue('category', categoryValue)
      setNewCategory((prevState: any) => {
        return [
          ...prevState,
          {
            id: temporalId,
            name: categoryValue
          }
        ]
      })
      setId(temporalId)
      handleCategoryValue('')
      setIsCategoryRepeated(categoryValueRepeated)
    }
    if (e.key === 'Enter' && categoryValueRepeated) {
      const categoryValueRepeated = isRepeated(categoryValue)
      handleInputValue('category', '')
      handleCategoryValue('')
      setIsCategoryRepeated(categoryValueRepeated)
    }
  }
  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    const categoryValueRepeated = isRepeated(categoryName)
    setId(categoryId)
    handleInputValue('category', categoryName)
    setIsCategoryRepeated(categoryValueRepeated)
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
                onClick={() => handleCategoryClick(category.id, category.name)}
                key={index}
              >
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

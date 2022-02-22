import {
  Text,
  Container,
  Spacer,
  Grid,
  Card
} from '@nextui-org/react'
import { CategoryItem } from 'components/categoryItem'

export const ListOfCategoryItem = () => {
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
          {
            [1, 2, 3, 4, 5].map(category => {
              return (
                <Grid key={category} sm={3}>
                  <CategoryItem />
                </Grid>
              )
            })
          }
        </Grid.Container>
      </Card>
    </Container>
  )
}
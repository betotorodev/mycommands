import { ChangeEvent } from 'react'
import { Container, Grid } from '@nextui-org/react'
import { ListOfCategories } from './listOfCategories/listOfCategories'
import { SearchCommand } from 'components/search/search'

export const Header = () => {
  return (
    <Container>
      <Grid.Container gap={1}>
        <Grid xs={8}>
          <SearchCommand />
        </Grid>
        <Grid xs={4} css={{ position: 'relative' }}>
          <ListOfCategories />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

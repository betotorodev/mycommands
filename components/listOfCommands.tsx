import { Container, Grid } from '@nextui-org/react'
import { CardItem } from 'components/cardItem'

export const ListOfCommands = () => {
  return (
    <Container>
      <Grid.Container gap={1} css={{marginBottom: '8rem'}}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
            <Grid key={i} xs={6}>
              <CardItem command='Git push texto de prueba pa ver esta chimbá'/>
            </Grid>
          ))
        }
      </Grid.Container>
    </Container>
  )
}

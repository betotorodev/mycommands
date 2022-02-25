import { Container, Grid } from '@nextui-org/react'
import { CardItem } from 'components/cardItem'

export const ListOfCommands = () => {
  const array = Array(15).fill('')
  return (
    <Container>
      <Grid.Container
        gap={1}
        css={{ marginBottom: '8rem' }}
      >
        {array.map((item, index) => (
          <Grid key={index} xs={6}>
            <CardItem
              command='Git push texto de prueba pa ver esta el largo del componente
              '
            />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  )
}

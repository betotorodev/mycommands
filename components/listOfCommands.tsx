
import { ReactChild, ReactNode, VFC } from 'react';
import { Container, Grid } from '@nextui-org/react'
import { CardItem } from 'components/cardItem'
import { useCommandInfo } from 'hooks/useCommandInfo';

export const ListOfCommands = () => {
  const array = Array(15).fill('')
  const { listOfCommands } = useCommandInfo()
  return (
    <Container>
      <Grid.Container
        gap={1}
        css={{ marginBottom: '8rem' }}
      >
        {listOfCommands?.map((item: any) => (
          <Grid key={item.id} xs={6}>
            <CardItem
              id={item.id}
              description={item.description}
              command={item.text}
              category={item.category}
            />
          </Grid>
        ))}
        {/* {array.map((item: any) => (
          <Grid key={item.id} xs={6}>
            <CardItem
              description={item.description}
              command={item.command}
            />
          </Grid>
        ))} */}
      </Grid.Container>
    </Container>
  )
}

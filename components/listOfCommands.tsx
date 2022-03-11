
import { ReactChild, ReactNode, VFC } from 'react';
import { Container, Grid } from '@nextui-org/react'
import { CardItem } from 'components/cardItem'

// type Command = {
//   author: string,
//   authorId: string,
//   command: string,
//   description: string,
//   id: string,
//   result: ReactNode
// }

// interface listOfCommands {
//   listOfCommands: ReactNode | ReactChild
// }

// CORRECT TYPES

export const ListOfCommands = ({ listOfCommands }: any) => {
  const array = Array(15).fill('')
  return (
    <Container>
      <Grid.Container
        gap={1}
        css={{ marginBottom: '8rem' }}
      >
        {listOfCommands?.map((item: any) => (
          <Grid key={item.id} xs={6}>
            <CardItem
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

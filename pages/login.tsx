import type { NextPage } from 'next'
import { Text, Container, Spacer, Button } from '@nextui-org/react';


const login: NextPage = () => {
  return (
    <>
      <Container>
        <Spacer y={10}/>
        <Spacer y={4}/>
        <Text h1 css={{textAlign: 'center'}}>My Commands</Text>
        <Container display='flex' justify="flex-end" css={{padding: '0'}}>
          <Text css={{padding: '0 1rem 0 8rem'}}>
            Guarda todos tus comandos en un solo lugar
          </Text>
        </Container>
      </Container>
      <Container display='flex' direction='column' alignContent="flex-end">
        <Spacer y={15}></Spacer>
        <Button size="sm">Log in</Button>
      </Container>
    </>
  )
}

export default login
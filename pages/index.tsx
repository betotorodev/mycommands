import type { NextPage } from 'next'
import Head from 'next/head'
import { useToggle } from 'hooks/useToggle';
import { Text, Container, Spacer, Button, Modal } from '@nextui-org/react';
import Github from '../public/github.svg'

const Home: NextPage = () => {
  const [isVisible, handleModal] = useToggle()
  return (
    <>
      <Head>
        <title>My Commands</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <title>Add</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <Button css={{backgroundColor: 'black'}}>
          Login with Github
          <Spacer x={0.5}/>
          <Github />
        </Button>
      </Container>
    </>
  )
}

export default Home

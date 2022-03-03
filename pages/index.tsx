import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { signIn, useSession, signOut } from "next-auth/react"
import { Text, Container, Spacer, Button } from '@nextui-org/react';
import Github from '../public/github.svg'
import { LoginButton } from 'components/loginButton';

const Home: NextPage = () => {
  const { data: session, status } = useSession()
  console.log(status)
  return (
    <>
      <Head>
        <title>My Commands</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{
        height: '100vh',
        width: '100vw',
        maxWidth: '960px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
      }}>
        <Container>
          <Text h1 css={{
            textAlign: 'center',
            '@xs': {
              textAlign: 'right'
            }
          }}>
            My Commands
          </Text>
          <Text css={{
            textAlign: 'center',
            '@xs': {
              textAlign: 'right'
            }
          }}>
            Guarda todos tus comandos en un solo lugar
          </Text>
        </Container>
        <Container display='flex' direction='column' alignContent="flex-end">
          <Spacer y={10}></Spacer>
          <LoginButton />
        </Container>
      </main>
    </>
  )
}

export default Home

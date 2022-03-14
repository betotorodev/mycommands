import { Text, Container, Spacer } from '@nextui-org/react'
import { LoginButton } from 'components/loginButton'

export const HomeComponent = () => {
  return (
    <main
      style={{
        height: '100vh',
        width: '100vw',
        maxWidth: '960px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column'
      }}
    >
      <Container>
        <Text
          h1
          css={{
            textAlign: 'center',
            '@xs': {
              textAlign: 'right'
            }
          }}
        >
          My Commands
        </Text>
        <Text
          css={{
            textAlign: 'center',
            '@xs': {
              textAlign: 'right'
            }
          }}
        >
          Guarda todos tus comandos en un solo lugar
        </Text>
      </Container>
      <Container display='flex' direction='column' alignContent='flex-end'>
        <Spacer y={10}></Spacer>
        <LoginButton />
      </Container>
    </main>
  )
}

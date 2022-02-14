import { useState } from 'react'
import type { NextPage } from 'next'
import { Text, Container, Spacer, Button, Modal, Row, Checkbox, Input } from '@nextui-org/react';
import Github from '../public/github.svg'


const login: NextPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const handleModal = () => setIsVisible(!isVisible)
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
        <Button size="sm" onClick={handleModal}>Log in</Button>
         <Modal
          closeButton
          aria-labelledby="modal-title"
          width='20rem'
          open={isVisible}
          onClose={handleModal}
        >
          <Modal.Header>
              <Text id="modal-title" size={18} b>
              Login
              </Text>
          </Modal.Header>
            <Modal.Footer justify='center'>
              <Button css={{backgroundColor: 'black'}}>
                Login with Github
                <Spacer x={0.5}/>
                <Github />
              </Button>
            </Modal.Footer>
        </Modal>
      </Container>
    </>
  )
}

export default login
import { useToggle } from 'hooks/useToggle';
import { Container, Row, Avatar, Card, Text } from '@nextui-org/react'
import { List, AddCircledOutline, RemoveUser } from 'iconoir-react';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useToggle()
  return (
    <Container css={{position: 'fixed', bottom: '3rem'}}>
      <Card>
        <Row justify="space-between" align="center">
          <List />
          <AddCircledOutline height={36} width={36}/>
          <Avatar onClick={setIsVisible} bordered rounded text="Beto" size="sm" color="primary" />
        </Row>
      </Card>
      {
        isVisible && 
          <Card css={{position: 'absolute', bottom: '-36px', right: '26px', width: 'fit-content', zIndex: '1'}}>
            <Text h5 css={{display: 'flex', alignItems: 'center'}}>
              Cerrar Sesión <RemoveUser style={{marginLeft: '10px'}}/>
            </Text>
          </Card>
      }
    </Container>
  )
} 
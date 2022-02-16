import { Container, Row, Avatar, Card } from '@nextui-org/react'
import { List, AddCircledOutline } from 'iconoir-react';

export const Navbar = () => {
  return (
    <Container css={{position: 'fixed', bottom: '4rem'}}>
      <Card>
        <Row justify="space-between" align="center">
          <List />
          <AddCircledOutline height={36} width={36}/>
          <Avatar bordered rounded text="Beto" size="sm" color="primary" />
        </Row>
      </Card>
    </Container>
  )
} 
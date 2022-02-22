import Link from 'next/link'
import { useToggle } from 'hooks/useToggle';
import { Container, Row, Avatar, Card} from '@nextui-org/react'
import { List, AddCircledOutline } from 'iconoir-react';
import { CloseSession } from 'components/closeSession'

export const Navbar = () => {
  const [isVisible, setIsVisible] = useToggle()
  return (
    <Container css={{
        position: 'fixed', 
        bottom: '3rem',
        maxWidth: '400px',
      }}>
      <Card>
        <Row justify="space-between" align="center">
          <Link href='/list' passHref><List /></Link>
          <Link href='/add' passHref><AddCircledOutline height={36} width={36}/></Link>
          <Avatar onClick={setIsVisible} bordered rounded text="Beto" size="sm" color="primary" />
        </Row>
      </Card>
      {isVisible && <CloseSession />}
    </Container>
  )
} 
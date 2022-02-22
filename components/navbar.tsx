import Link from 'next/link'
import { useToggle } from 'hooks/useToggle'
import { Container, Row, Avatar, Card } from '@nextui-org/react'
import { List, AddCircledOutline } from 'iconoir-react'
import { CloseSession } from 'components/closeSession'
import { useLargeBreakpoint } from 'hooks'

export const Navbar = () => {
  const [isVisible, setIsVisible] = useToggle()
  const isDesktop = useLargeBreakpoint()
  console.log(isDesktop)
  return (
    <Container
      css={{
        position: 'fixed',
        bottom: '3rem',
        maxWidth: '400px',
        '@lg': {
          left: '3rem',
          bottom: '50%',
          transform: 'rotate(90deg)'
        }
      }}
    >
      <Card>
        <Row justify='space-between' align='center'>
          <Link href='/list' passHref>
            <List style={{ transform: `${isDesktop ? 'rotate(270deg)' : ''}` }} />
          </Link>
          <Link href='/add' passHref>
            <AddCircledOutline height={36} width={36} />
          </Link>
          <Avatar
            onClick={setIsVisible}
            bordered
            rounded
            text='Beto'
            size='sm'
            color='primary'
          />
        </Row>
      </Card>
      {isVisible && <CloseSession />}
    </Container>
  )
}

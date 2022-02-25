import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from "next-auth/react"
import { useToggle } from 'hooks/useToggle'
import { Container, Row, Avatar, Card } from '@nextui-org/react'
import { List, AddCircledOutline } from 'iconoir-react'
import { CloseSession } from 'components/closeSession'
import { useLargeBreakpoint } from 'hooks'

export const Navbar = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [isVisible, setIsVisible] = useToggle(false)
  const isDesktop = useLargeBreakpoint()
  console.log(session)
  const handleCloseSession = () => {
    signOut()
    console.log(session)
  }
  return (
    <Container
      css={{
        position: 'fixed',
        bottom: `${isDesktop ? '50%' : '3rem'}`,
        left: `${isDesktop && '-3rem'}`,
        maxWidth: '400px',
        transform: `${isDesktop && 'rotate(90deg)'}`
      }}
    >
      <Card>
        <Row justify='space-between' align='center'>
          <Link href='/list' passHref>
            <List
              style={{ transform: `${isDesktop ? 'rotate(270deg)' : ''}` }}
            />
          </Link>
          <Link href='/add' passHref>
            <AddCircledOutline
              height={36}
              width={36}
            />
          </Link>
          <Avatar
            onClick={setIsVisible}
            bordered
            rounded
            text='Beto'
            size='sm'
            color='primary'
            style={{ transform: `${isDesktop ? 'rotate(270deg)' : ''}` }}
          />
        </Row>
      </Card>
      <div onClick={handleCloseSession} style={{
        display: `${isVisible ? 'flex' : 'none'}`
      }} >
        <CloseSession />
      </div>
    </Container>
  )
}

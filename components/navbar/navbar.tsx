import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useToggle } from 'hooks/useToggle'
import { Container, Row, Avatar, Card } from '@nextui-org/react'
import { List, AddCircledOutline } from 'iconoir-react'
import { CloseSession } from 'components/closeSession'
import { useChangeColor, useLargeBreakpoint } from 'hooks'
import styles from 'components/navbar/styles.module.css'

const BUTTON_TYPES = {
  LIST: 'list',
  ADD: 'add',
}

export const Navbar = () => {
  const [buttonColors, setButtonColors] = useState<string | null>('')
  const { handleClick } = useChangeColor()
  const { data: session } = useSession()
  const [isVisible, setIsVisible] = useToggle(false)
  const isDesktop = useLargeBreakpoint()
  const userImage = session?.user?.image as string
  const handleCloseSession = () => {
    signOut({ callbackUrl: '/' })
  }

  useEffect(() => {
    setButtonColors(window.localStorage.getItem('button_color'))
  }, [])

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
              onClick={() => handleClick(BUTTON_TYPES.LIST)}
              className={styles.list}
              style={{
                transform: `${isDesktop ? 'rotate(270deg)' : ''}`,
                cursor: 'pointer',
              }}
              color={`${buttonColors === '1' ? '#0070F3' : 'black'}`}
            />
          </Link>
          <Link href='/add' passHref>
            <AddCircledOutline
              onClick={() => handleClick(BUTTON_TYPES.ADD)}
              height={36}
              width={36}
              style={{ cursor: 'pointer' }}
              color={`${buttonColors === '2' ? '#0070F3' : 'black'}`}
            />
          </Link>
          <Avatar
            src={userImage}
            onClick={setIsVisible}
            bordered
            rounded
            text='Beto'
            size='sm'
            color='primary'
            style={{
              transform: `${isDesktop ? 'rotate(270deg)' : ''}`,
              cursor: 'pointer'
            }}
          />
        </Row>
      </Card>
      <div
        onClick={handleCloseSession}
        style={{
          display: `${isVisible ? 'flex' : 'none'}`,
          cursor: 'pointer'
        }}
      >
        <CloseSession />
      </div>
    </Container>
  )
}

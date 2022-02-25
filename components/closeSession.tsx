import { Card, Text } from '@nextui-org/react'
import { RemoveUser } from 'iconoir-react'
import { useLargeBreakpoint } from 'hooks'

export const CloseSession = () => {
  const stylesInDesktop = {
    position: 'absolute',
    bottom: '-50px',
    right: '-70px',
    width: 'fit-content',
    zIndex: '1',
    transform: 'rotate(270deg)'
  }
  const stylesInMobile = {
    position: 'absolute',
    bottom: '-36px',
    right: '26px',
    width: 'fit-content',
    zIndex: '1'
  }
  const isDesktop = useLargeBreakpoint()
  const style = isDesktop ? stylesInDesktop : stylesInMobile
  return (
    <Card
      css={style}
    >
      <Text h5 css={{ display: 'flex', alignItems: 'center' }}>
        Cerrar Sesión <RemoveUser style={{ marginLeft: '10px' }} />
      </Text>
    </Card>
  )
}

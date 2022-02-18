import { Card, Text } from '@nextui-org/react'
import { RemoveUser } from 'iconoir-react';

export const CloseSession = () => {
  return (
    <Card css={{position: 'absolute', bottom: '-36px', right: '26px', width: 'fit-content', zIndex: '1'}}>
      <Text h5 css={{display: 'flex', alignItems: 'center'}}>
        Cerrar Sesión <RemoveUser style={{marginLeft: '10px'}}/>
      </Text>
    </Card>
  )
}

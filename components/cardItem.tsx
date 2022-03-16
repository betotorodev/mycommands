import { useToggle } from 'hooks/useToggle'
import { Card, Col, Modal, Row, Text } from '@nextui-org/react'
import { CardIcons } from './cardIcons'
import { InfoModal } from './infoModal'

const themeColors = {
  backgroundDark: '#40434A',
  backgroundLight: '#F7F6F3',
  textDark: '#37352F',
  textLight: '#E7ECED'
}

export const CardItem = ({
  command,
  description,
  category,
}: {
  command: string
  description: string
  category: string
}) => {
  const [isVisible, handleModal] = useToggle()
  return (
    <Card
      shadow={false}
      hoverable
      css={{
        backgroundColor: themeColors.backgroundLight,
        color: themeColors.textDark,
        fontFamily: 'mono'
      }}
    >
      <Text as='p' css={{ fontFamily: 'mono' }}>{command}</Text>
      <Card.Footer>
        <Row justify='space-between' align='center'>
          <div style={{ display: 'flex' }}>
            <small
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 'fit-content',
                padding: ' 8px 16px',
                marginRight: '8px',
                borderRadius: '0.75rem',
                backgroundColor: '#7928ca',
                color: 'white'
              }}
            >
              {category}
            </small>
            <small
              onClick={handleModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 'fit-content',
                padding: ' 8px 16px',
                borderRadius: '0.75rem',
                backgroundColor: '#444',
                color: 'white'
              }}
            >
              Info
            </small>
          </div>
          <div>
            <CardIcons />
          </div>
          <InfoModal isVisible={isVisible} handleModal={handleModal} description={description} />
        </Row>
      </Card.Footer>
    </Card>
  )
}

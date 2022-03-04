import { useToggle } from 'hooks/useToggle'
import { Card, Col, Modal, Row, Text } from '@nextui-org/react'

const themeColors = {
  backgroundDark: '#40434A',
  backgroundLight: '#F7F6F3',
  textDark: '#37352F',
  textLight: '#E7ECED'
}

export const CardItem = ({
  command,
  description
}: {
  command: string
  description: string
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
      <Text css={{ fontFamily: 'mono' }}>{command}</Text>
      <Card.Footer>
        <Row justify='flex-start'>
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
            Git
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
          <Modal
            scroll
            closeButton
            aria-describedby='modal-description'
            width='20rem'
            open={isVisible}
            onClose={handleModal}
            style={{ paddingBottom: '1.5rem' }}
          >
            <Modal.Body>
              <Text id='modal-description' size={18} b>
                {description}
              </Text>
            </Modal.Body>
          </Modal>
        </Row>
      </Card.Footer>
    </Card>
  )
}

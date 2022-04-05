import { VFC } from 'react'
import { useToggle } from 'hooks/useToggle'
import { Card, Row, Text } from '@nextui-org/react'
import { CardIcons } from '../cardIcons'
import { InfoModal } from '../infoModal'
import styles from './styles.module.css'
import { useXSmallBreakpoint } from 'hooks'

const themeColors = {
  backgroundDark: '#40434A',
  backgroundLight: '#F7F6F3',
  textDark: '#37352F',
  textLight: '#E7ECED'
}

interface CardItemData {
  id: string
  command: string
  description: string
  category: string
}

export const CardItem: VFC<CardItemData> = ({
  id,
  command,
  description,
  category
}) => {
  const [isVisible, handleModal] = useToggle()
  const isMobile = useXSmallBreakpoint()
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
          <div style={{ display: 'flex', flexDirection: `${isMobile ? 'row' : 'column '}` }}>
            <small
              className={styles.category}
            >
              {category}
            </small>
            <small
              className={styles.info}
              onClick={handleModal}
            >
              Info
            </small>
          </div>
          <div>
            <CardIcons id={id} />
          </div>
          <InfoModal isVisible={isVisible} handleModal={handleModal} description={description} />
        </Row>
      </Card.Footer>
    </Card>
  )
}

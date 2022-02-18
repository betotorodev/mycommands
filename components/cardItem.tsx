import { Card, Col, Container, Grid, Input, Row, Text } from '@nextui-org/react'

const themeColors = {
  backgroundDark: '#40434A',
  backgroundLight: '#F7F6F3',
  textDark: '#37352F',
  textLight: '#E7ECED'
}

export const CardItem = ({ command }: {command: string}) => {
    return (
      <Card shadow={false} hoverable css={{backgroundColor: themeColors.backgroundLight, color: themeColors.textDark, fontFamily: 'mono'}}>
        <Text css={{fontFamily: 'mono'}}>{command}</Text>
        <Card.Footer>
          <Row>
            <Col>
              <small style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 'fit-content',
                    padding: ' 8px 16px',
                    borderRadius: '0.75rem',
                    backgroundColor: '#7928ca',
                    color: 'white'
                  }}>
                    Git
              </small>
            </Col>
            <Col>
              <small style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 'fit-content',
                    padding: ' 8px 16px',
                    borderRadius: '0.75rem',
                    backgroundColor: '#444',
                    color: 'white'
                  }}>
                    Info
              </small>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    )
  }
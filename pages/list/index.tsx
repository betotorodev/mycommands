import Head from 'next/head'
import type { NextPage } from 'next'
import { Layout } from 'components/layout'
import { Card, Col, Container, Grid, Input, Row, Text } from '@nextui-org/react'
import { Header } from 'components/header'

const themeColors = {
  backgroundDark: '#40434A',
  backgroundLight: '#F7F6F3',
  textDark: '#37352F',
  textLight: '#E7ECED'
}

const List: NextPage = () => {
  const CardItem = ({ command }: {command: string}) => {
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
  return (
    <Layout>
      <Head>
        <title>List</title>
      </Head>
      <main style={{paddingTop: '2rem'}}>
        <Header />
        <Container>
          <Grid.Container gap={1} css={{marginBottom: '10rem'}}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
                <Grid key={i} xs={6}>
                  <CardItem command='Git push texto de prueba pa ver esta chimbá'/>
                </Grid>
              ))
            }
          </Grid.Container>
        </Container>
      </main>
    </Layout>
  )
}

export default List
import Head from 'next/head'
import type { NextPage } from 'next'
import { Layout } from 'components/layout'
import { Container, Grid } from '@nextui-org/react'
import { Header } from 'components/header'
import { CardItem } from 'components/CardItem'

const List: NextPage = () => {
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
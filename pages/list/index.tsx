import Head from 'next/head'
import type { NextPage } from 'next'
import { Layout } from 'components/layout'
import { Container, Grid, Input } from '@nextui-org/react'
import { Search, ArrowDown } from 'iconoir-react';


const List: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>List</title>
      </Head>
      <main style={{paddingTop: '2rem'}}>
        <Container>
          <Grid.Container gap={1}>
            <Grid xs={8}>
                <Input size="md" width='100%' clearable placeholder="busca tu comando" contentRight={<Search />} />
            </Grid>
            <Grid xs={4}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: ' 8px 12px',
                borderRadius: '0.75rem',
                backgroundColor: '#f4f4f4',
              }}>
                all
                <ArrowDown />
              </div>
            </Grid>
          </Grid.Container>
        </Container>
      </main>
    </Layout>
  )
}

export default List
import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Text,
  Container,
  Spacer,
  Input,
  Textarea,
  Button
} from '@nextui-org/react'
import { Layout } from 'layout/layout'
import { ListOfCategoryItem } from 'components/listOfCategoryItem'

const Add: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Add</title>
      </Head>
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        transform: 'translateY(-40px)'
      }}>
        <Container>
          <Input
            clearable
            labelPlaceholder='Agrega un comando'
            width='100%'
            css={{ fontFamily: 'mono' }}
          />
        </Container>
        <Spacer y={2} />
        <ListOfCategoryItem />
        <Spacer y={2} />
        <Container>
          <Textarea
            labelPlaceholder='De qué trata el comando?'
            status='default'
            width='100%'
            rows={6}
            css={{ fontFamily: 'mono' }}
          />
        </Container>
        <Spacer y={2} />
        <Container justify='center' display='flex'>
          <Button>Guardar</Button>
        </Container>
      </main>
    </Layout>
  )
}

export default Add

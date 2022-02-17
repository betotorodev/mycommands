import type { NextPage } from 'next'
import Head from 'next/head'
import { Text, Container, Spacer, Grid, Card, Input, Textarea, Button } from '@nextui-org/react';
import { Layout } from 'components/layout';

const Add: NextPage = () => {
  const CategoryItems = () => {
     return (
      <Card shadow={false} css={{borderRadius: '25%', width: 'fit-content', fontSize: '12px', padding: '$0'}}>Git</Card>
    )
  }
  return (
    <Layout>
      <Head>
        <title>Add</title>
      </Head>
      <main style={{paddingTop: '150px'}}>
        <Container>
          <Input clearable labelPlaceholder="Agrega un comando" width="100%" css={{fontFamily: 'mono'}} />
        </Container>
        <Spacer y={2}/>
        <Container>
          <Text small css={{marginLeft: '7px', fontFamily: 'mono', fontWeight: 'light'}}>Elige una categoría</Text>
          <Spacer y={0.3}/>
          <Card shadow={false} css={{backgroundColor: '#f4f4f4'}}>
            <Grid.Container gap={1} >
              <Grid sm={3}><CategoryItems /></Grid>
              <Grid sm={3}><CategoryItems /></Grid>
              <Grid sm={3}><CategoryItems /></Grid>
              <Grid sm={3}><CategoryItems /></Grid>
              <Grid sm={3}><CategoryItems /></Grid>
            </Grid.Container>
          </Card>
        </Container>
        <Spacer y={2}/>
        <Container>
          <Textarea labelPlaceholder="De qué trata el comando?" status="default" width='100%' rows={6} css={{fontFamily: 'mono'}}/>
        </Container>
        <Spacer y={2}/>
        <Container justify="center" display="flex">
          <Button>Guardar</Button>
        </Container>
      </main>
    </Layout>
  )
}

export default Add

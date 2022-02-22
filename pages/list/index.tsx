import Head from 'next/head'
import type { NextPage } from 'next'
import { Layout } from 'layout/layout'
import { Header } from 'components/header'
import { ListOfCommands } from "components/listOfCommands"

const List: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>List</title>
      </Head>
      <main style={{ paddingTop: '2rem' }}>
        <Header />
        <ListOfCommands />
      </main>
    </Layout>
  )
}

export default List
import Head from 'next/head'
import type { NextPage, GetStaticProps } from 'next'
import { Layout } from 'layout/layout'
import { Header } from 'components/header'
import { ListOfCommands } from "components/listOfCommands"
import { prisma } from 'prisma/index'

export const getStaticProps: GetStaticProps = async () => {
  const result = await prisma.command.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return { props: { result } };
};

const List: NextPage = (props) => {

  return (
    <Layout>
      <Head>
        <title>List</title>
      </Head>
      <main style={{ paddingTop: '2rem' }}>
        <Header />
        <ListOfCommands listOfCommands={props} />
      </main>
    </Layout>
  )
}

export default List
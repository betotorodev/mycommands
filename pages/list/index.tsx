import Head from 'next/head'
import type { NextPage, GetServerSideProps } from 'next'
import { Layout } from 'layout/layout'
import { Header } from 'components/header'
import { ListOfCommands } from "components/listOfCommands"
import { prisma } from 'prisma/index'
import { Command } from '@prisma/client'
import { useCommandInfo } from 'hooks/useCommandInfo'
import { useEffect } from 'react'

export const getServerSideProps: GetServerSideProps = async () => {
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
  const { result }: any = props
  return (
    <Layout>
      <Head>
        <title>List</title>
      </Head>
      <main style={{ paddingTop: '2rem' }}>
        <Header />
        <ListOfCommands listOfCommands={result} />
      </main>
    </Layout>
  )
}

export default List
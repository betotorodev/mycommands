import Head from 'next/head'
import type { NextPage, GetServerSideProps } from 'next'
import { Layout } from 'layout/layout'
import { Header } from 'components/header'
import { ListOfCommands } from "components/listOfCommands"
import { prisma } from 'prisma/index'
import { Command } from '@prisma/client'
import { useCommandInfo } from 'hooks/useCommandInfo'
import { useEffect } from 'react'
import { ComponentWithAuth } from 'auth.utils'

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

const List: ComponentWithAuth<NextPage> = (props) => {
  const { result }: any = props
  const { setListOfCommands, setOriginalData } = useCommandInfo()

  useEffect(() => {
    setListOfCommands(result)
    setOriginalData(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

List.authenticationEnabled = true
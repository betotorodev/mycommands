import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { SESSION_STATUS } from 'utils/utils'
import { Loading } from 'components/loading/loading'
import { HomeComponent } from 'components/home'

const Home: NextPage = () => {
  const router = useRouter()
  const { status } = useSession()
  if (status === SESSION_STATUS.LOADING) return <Loading />
  if (status === SESSION_STATUS.AUTHENTICATED) router.push('/add')
  return (
    <>
      <Head>
        <title>My Commands</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {status === SESSION_STATUS.UNAUTHENTICATED && <HomeComponent />}
    </>
  )
}

export default Home

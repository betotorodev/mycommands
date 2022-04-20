import type { NextPage, GetServerSideProps } from 'next'
import React, { useState, ChangeEvent, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { prisma } from 'prisma/index'
import {
  Container,
  Spacer,
  Input,
  Textarea,
  Button,
  FormElement,
  Loading
} from '@nextui-org/react'
import { Layout } from 'layout/layout'
import { ListOfCategoryItem } from 'components/listOfCategoryItem'
import { useCategory, useForm } from 'hooks'
import { useCommandInfo } from 'hooks/useCommandInfo'
import { ComponentWithAuth } from 'auth.utils'
// import { Loading } from 'components/loading/loading'

const Add: ComponentWithAuth<NextPage> = (props) => {
  const { result }: any = props
  const [loading, setLoading] = useState(false)
  const [inputValue, handleInputValue] = useForm()
  const { setListOfCategories } = useCommandInfo()
  const router = useRouter()
  const { isCategoryRepeated } = useCategory()

  const handleCommandChange = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target
    handleInputValue('text', value)
  }
  const handleDescriptionChange = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target
    handleInputValue('description', value)
  }
  const handleSave = async () => {
    const { category } = inputValue
    const categoryObject = { category }
    try {
      setLoading(true)
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputValue),
      }).then((res) => {
        setLoading(false)
      })
      if (isCategoryRepeated === false) {
        await fetch('/api/post/category', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(categoryObject),
        }).then(() => {
          setListOfCategories([...result, { name: category, id: '1' }])
        })
      }
      await router.push('/list')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setListOfCategories(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
            onChange={handleCommandChange}
            clearable
            labelPlaceholder='Escribe un comando'
            width='100%'
            css={{ fontFamily: 'mono' }}
          />
        </Container>
        <Spacer y={2} />
        <ListOfCategoryItem />
        <Spacer y={2} />
        <Container>
          <Textarea
            onChange={handleDescriptionChange}
            labelPlaceholder='De qué trata el comando?'
            status='default'
            width='100%'
            rows={6}
            css={{ fontFamily: 'mono' }}
          />
        </Container>
        <Spacer y={2} />
        <Container justify='center' display='flex'>
          {
            loading
              ? <Loading />
              : <Button onClick={handleSave}>Guardar</Button>
          }
        </Container>
      </main>
    </Layout>
  )
}

export default Add

Add.authenticationEnabled = true

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await prisma.category.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return { props: { result } };
};


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
  FormElement
} from '@nextui-org/react'
import { Layout } from 'layout/layout'
import { ListOfCategoryItem } from 'components/listOfCategoryItem'
import { useForm } from 'hooks/useForm'

const Add: NextPage = (props) => {
  const { result }: any = props
  const [inputValue, handleInputValue] = useForm()
  const router = useRouter()

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
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputValue),
      })
      await fetch('/api/post/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoryObject),
      })
      await router.push('/list')
    } catch (error) {
      console.error(error)
    }
  }

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
            labelPlaceholder='Agrega un comando'
            width='100%'
            css={{ fontFamily: 'mono' }}
          />
        </Container>
        <Spacer y={2} />
        <ListOfCategoryItem categories={result} />
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
          <Button onClick={handleSave}>Guardar</Button>
        </Container>
      </main>
    </Layout>
  )
}

export default Add

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


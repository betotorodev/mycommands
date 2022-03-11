import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from 'prisma/index'

// POST /api/post
// Required fields in body: content
// Optional fields in body: description
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category } = req.body

  const session = await getSession({ req })
  const result = await prisma.category.create({
    data: {
      name: category,
      author: { connect: { email: session?.user?.email } } as any
    }
  })
  res.json(result)
}

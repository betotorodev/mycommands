import { Card } from '@nextui-org/react'

export const CategoryItem = ({ title }: { title: string }) => {
  return (
    <Card
      shadow={false}
      css={{
        borderRadius: '25%',
        width: 'fit-content',
        fontSize: '12px',
        padding: '$0',
        cursor: 'pointer'
      }}
    >
      {title}
    </Card>
  )
}

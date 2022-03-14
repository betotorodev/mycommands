import { Card } from '@nextui-org/react'

export const CategoryItem = ({
  title,
  checked
}: {
  title: string
  checked: boolean
}) => {
  return (
    <Card
      clickable
      shadow={false}
      css={{
        backgroundColor: `${checked && '#7928ca'}`,
        color: `${checked && 'white'}`,
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

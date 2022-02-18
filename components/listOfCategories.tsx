import { Card } from '@nextui-org/react'

export const ListOfCategories = () => {
  return (
    <Card css={{position: 'absolute', bottom: '-124px', right: '6px', zIndex: '1', backgroundColor: '#f4f4f4'}}>
      <ul style={{margin: '0', textAlign: 'center'}}>
        <li>Git</li>
        <li>Docker</li>
        <li>Npm</li>
      </ul>
    </Card>
  )
}

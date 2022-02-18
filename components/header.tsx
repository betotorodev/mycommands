import { useState } from 'react'
import { Card, Col, Container, Grid, Input } from '@nextui-org/react'
import { Search, ArrowDown, ArrowUp } from 'iconoir-react'

export const Header = () => {
  const [toggle, setToggle] = useState(false)
  const handleModal = () => setToggle(!toggle)
  return (
    <Container>
      <Grid.Container gap={1}>
        <Grid xs={8}>
            <Input size="md" width='100%' clearable placeholder="busca tu comando" contentRight={<Search />} />
        </Grid>
        <Grid xs={4} css={{position: 'relative'}}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: ' 8px 12px',
            borderRadius: '0.75rem',
            backgroundColor: '#f4f4f4',
          }}>
            all
            {toggle && <ArrowUp onClick={handleModal} />}
            {!toggle && <ArrowDown onClick={handleModal} />}
          </div>
          {
            toggle && 
              <Card css={{position: 'absolute', bottom: '-124px', right: '6px', zIndex: '1', backgroundColor: '#f4f4f4'}}>
                <ul style={{margin: '0', textAlign: 'center'}}>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Npm</li>
                </ul>
              </Card>
          }
        </Grid>
      </Grid.Container>
    </Container>
  )
}

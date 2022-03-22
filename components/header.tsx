import { useToggle } from 'hooks/useToggle';
import { Container, Grid, Input } from '@nextui-org/react'
import { Search, ArrowDown, ArrowUp } from 'iconoir-react'
import { ListOfCategories } from './listOfCategories/listOfCategories'

export const Header = () => {
  const [toggle, handleModal] = useToggle()
  return (
    <Container>
      <Grid.Container gap={1}>
        <Grid xs={8}>
          <Input size="md" width='100%' aria-label="buscador" clearable placeholder="busca tu comando" contentRight={<Search />} />
        </Grid>
        <Grid xs={4} css={{ position: 'relative' }}>
          <div onClick={handleModal} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: ' 8px 12px',
            borderRadius: '0.75rem',
            backgroundColor: '#f4f4f4',
          }}>
            all
            {toggle && <ArrowUp />}
            {!toggle && <ArrowDown />}
          </div>
          {toggle && <ListOfCategories />}
        </Grid>
      </Grid.Container>
    </Container>
  )
}

import { ChangeEvent } from 'react'
import { useFindCommands } from 'hooks/useFindCommands'
import { Input, FormElement } from '@nextui-org/react'
import { Search } from 'iconoir-react'

export const SearchCommand = () => {
  const { findByWord } = useFindCommands()
  const handleSearchByWord = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target
    findByWord(value)
  }
  return (
    <Input
      size="md"
      width='100%'
      aria-label="buscador"
      clearable placeholder="busca tu comando"
      contentRight={<Search />}
      onChange={handleSearchByWord}
    />
  )
}

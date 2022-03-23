import { useEffect } from "react"

const BUTTON_TYPES = {
  LIST: 'list',
  ADD: 'add',
}

export const useChangeColor = () => {

  const handleClick = (typeButton: string = '2') => {
    if (typeButton === BUTTON_TYPES.LIST) window.localStorage.setItem('button_color', '1')
    if (typeButton === BUTTON_TYPES.ADD) window.localStorage.setItem('button_color', '2')

  }


  return { handleClick }
}

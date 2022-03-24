import { NextUIProvider } from '@nextui-org/react'
import { CommandValuesProvider } from 'context/valuesContext'
import { CommandInfoProvider } from 'context/commandInfoContext'

export const App = ({ children }: any) => {
  return (
    <CommandInfoProvider>
      <CommandValuesProvider>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </CommandValuesProvider>
    </CommandInfoProvider>
  )
}

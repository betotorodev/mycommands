import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import { CommandValuesProvider } from 'context/valuesContext'
import { CommandInfoProvider } from 'context/commandInfoContext'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <CommandInfoProvider>
        <CommandValuesProvider>
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </CommandValuesProvider>
      </CommandInfoProvider>
    </SessionProvider>
  )
}

export default MyApp

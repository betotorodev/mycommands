import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import { CommandValuesProvider } from 'context/valuesContext'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <CommandValuesProvider>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </CommandValuesProvider>
    </SessionProvider>
  )
}

export default MyApp

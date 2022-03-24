import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { AppAuthProps } from 'auth.utils'
import Auth from 'utils/auth'
import { App } from '../utils/app'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppAuthProps) {
  return (
    <SessionProvider session={session}>
      {
        Component.authenticationEnabled
          ? <Auth>
            <App>
              <Component {...pageProps} />
            </App>
          </Auth>
          :
          <App>
            <Component {...pageProps} />
          </App>
      }
    </SessionProvider>
  )
}

export default MyApp

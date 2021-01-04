import { FC } from 'react'
import type { AppProps } from 'next/app'

import '@assets/main.css'
import { ManagedUIContext } from '@components/ui/context'
import { Head } from '@components/common'
import 'keen-slider/keen-slider.min.css'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}

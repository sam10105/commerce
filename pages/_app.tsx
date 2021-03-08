import type { FC } from 'react'
import type { AppProps } from 'next/app'

import '@assets/main.css'
import { UIProvider } from '@components/ui/context'
import { Head } from '@components/common'
import 'keen-slider/keen-slider.min.css'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <Head />
      <UIProvider>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  )
}

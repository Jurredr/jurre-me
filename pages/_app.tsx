import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Jurre de Ruiter | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jurre de Ruiter is an ambitious 19 y/o developer, Computer Science student, and content creator from The Netherlands."
        />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp

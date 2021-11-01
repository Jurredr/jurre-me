import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import 'windi.css'
import Cursor from '../components/Cursor'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* The Head metadata */}
      <Head>
        <title>Jurre de Ruiter | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jurre de Ruiter is an ambitious 19 y/o developer,
          Computer Science student, and content creator from The Netherlands."
        />
      </Head>

      {/* The page component */}
      <Component {...pageProps} />

      {/* Custom cursor */}
      <Cursor />
    </RecoilRoot>
  )
}
export default MyApp

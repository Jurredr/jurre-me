import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import WebHead from '../components/WebHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* The Head metadata */}
      <WebHead />

      {/* The page component */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

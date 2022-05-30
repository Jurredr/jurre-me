import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import WebHead from '../components/WebHead'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      {/* The Head metadata */}
      <WebHead />
      <ThemeProvider attribute="class">
        {/* The page component */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

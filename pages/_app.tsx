import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { SEO } from '../components/common/SEO'
import Cursor from '../components/common/Cursor'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      {/* The default SEO configuration */}
      <SEO title="Home" />
      <ThemeProvider attribute="class">
        {/* The custom cursor */}
        <Cursor />
        {/* The page component */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

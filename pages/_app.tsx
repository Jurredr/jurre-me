import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { SEO } from '../components/common/SEO'
import Cursor from '../components/common/Cursor'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      {/* Viewport */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      {/* The default SEO configuration */}
      <SEO title="Home" />

      {/* The base site and its theme provider */}
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

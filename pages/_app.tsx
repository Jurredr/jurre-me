import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import WebHead from '../components/WebHead'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      {/* The Head metadata */}
      <WebHead />

      {/* The page component */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

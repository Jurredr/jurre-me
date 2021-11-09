import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import 'windi.css'
import WebHead from '../components/WebHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* The Head metadata */}
      <WebHead />

      {/* The page component */}
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp

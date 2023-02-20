import "@fontsource/roboto-mono"
import "@fontsource/roboto-mono/600.css"
import "@fontsource/roboto-mono/700.css"
import "@fontsource/space-grotesk"
import "@fontsource/space-grotesk/300.css"
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import useGoogleTagManager from "@/hooks/useGoogleTagManager"

const App = ({ Component, pageProps }: AppProps) => {
  useGoogleTagManager()

  return (
    <>
      <NextNProgress color="#000" height={6} key="progress-bar" />
      <Component {...pageProps} />
    </>
  )
}

export default App

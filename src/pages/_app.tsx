import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import PreloadScreen from '../components/app/PreloadScreen'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <PreloadScreen>
        <Component {...pageProps} />
      </PreloadScreen>
    </RecoilRoot>
  )
}

export default MyApp

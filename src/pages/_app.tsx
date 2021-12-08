import '../../styles/app.css'
import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import PreloadScreen from '../components/app/PreloadScreen'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <RecoilRoot>
      <PreloadScreen routeKey={router.route}>
        <Component {...pageProps} />
      </PreloadScreen>
    </RecoilRoot>
  )
}

export default MyApp

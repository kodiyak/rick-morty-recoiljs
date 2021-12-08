import type { NextPage } from 'next'
import DefaultPage from '../components/common/DefaultPage'
import PageTitle from '../components/common/PageTitle'
import DefaultHead from '../components/seo/DefaultHead'

const Home: NextPage = () => {
  return (
    <div>
      <DefaultHead />

      <DefaultPage>
        <PageTitle title="Rick and Morty" description="Testing Recoil.js" />
      </DefaultPage>
    </div>
  )
}

export default Home

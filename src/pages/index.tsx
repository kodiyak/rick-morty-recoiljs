import type { NextPage } from 'next'
import DefaultPage from '../components/common/DefaultPage'
import PageTitle from '../components/common/PageTitle'
import CharacterCard from '../components/modules/Characters/CharacterCard'
import DefaultHead from '../components/seo/DefaultHead'
import { useCharacters } from '../store/characters'

const Home: NextPage = () => {
  const [characters, setCharacters] = useCharacters()

  return (
    <div>
      <DefaultHead />

      <DefaultPage>
        <PageTitle title="Rick and Morty" description="See All Characters" />
        <section className="w-full mx-auto relative z-10 min-h-screen p-2">
          <div className="w-full grid grid-cols-12 gap-4">
            {characters.map((character) => (
              <CharacterCard character={character} key={`char${character.id}`} />
            ))}
          </div>
        </section>
      </DefaultPage>

      <footer></footer>
    </div>
  )
}

export default Home

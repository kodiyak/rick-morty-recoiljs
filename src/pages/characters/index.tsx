import { Collection } from 'collect.js'
import React, { useMemo } from 'react'
import DefaultPage from '../../components/common/DefaultPage'
import PageTitle from '../../components/common/PageTitle'
import CharacterCard from '../../components/modules/Characters/CharacterCard'
import CharactersGridList from '../../components/modules/Characters/CharactersGridList'
import DefaultHead from '../../components/seo/DefaultHead'
import { useCharacters } from '../../store/characters'

const CharactersHome: React.FC = () => {
  const [characters, setCharacters] = useCharacters()

  const page = 1

  const items = useMemo(() => {
    return new Collection(characters).forPage(page, 24).all()
  }, [characters, page])

  return (
    <div>
      <DefaultHead />

      <DefaultPage>
        <PageTitle title="Rick and Morty" description="See All Characters" />
        <section className="w-full mx-auto relative z-10 min-h-screen p-2">
          <CharactersGridList characters={items} />
        </section>
      </DefaultPage>

      <footer></footer>
    </div>
  )
}

export default CharactersHome

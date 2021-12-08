import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import DefaultPage from '../../../components/common/DefaultPage'
import PageTitle from '../../../components/common/PageTitle'
import DefaultHead from '../../../components/seo/DefaultHead'
import { useCharacters } from '../../../store/characters'

const ShowCharPage: NextPage = () => {
  const { query } = useRouter()
  const [characters] = useCharacters()
  const character = useMemo(() => {
    return characters.find((char) => char.id === Number(query.id))
  }, [query, characters])

  if (!character) return <></>

  return (
    <div>
      <DefaultHead />

      <DefaultPage>
        <PageTitle title="Rick and Morty" description={`${character.name}`} />
        <div className="w-full min-h-screen">
          <div className="w-3/4 mx-auto">
            <div className="flex flex-row">
              <div className="w-48 h-48 bg-white rounded-full shadow-lg">
                <img
                  src={character.image}
                  alt={character.name}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 flex flex-col pl-4">
                <h2 className="text-3xl font-bold">{character.name}</h2>
                <p className="text-md">{character.episode.length} episódios</p>
              </div>
            </div>
          </div>
        </div>
      </DefaultPage>
    </div>
  )
}

export default ShowCharPage

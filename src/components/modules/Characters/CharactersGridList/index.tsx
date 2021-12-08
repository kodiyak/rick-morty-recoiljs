import React from 'react'
import { Character } from 'rickmortyapi/dist/interfaces'
import CharacterCard from '../CharacterCard'

interface CharactersGridListProps {
  characters: Character[]
}

const CharactersGridList: React.FC<CharactersGridListProps> = ({ characters }) => {
  return (
    <div className="w-full grid md:grid-cols-8 2xl:grid-cols-12 gap-4">
      {characters.map((character, key) => (
        <CharacterCard character={character} key={`char${character.id}#${key}`} />
      ))}
    </div>
  )
}

export default CharactersGridList

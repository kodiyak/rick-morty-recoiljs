import React, { memo, useState } from 'react'
import { Character } from 'rickmortyapi/dist/interfaces'
import AppLink from '../../../common/AppLink'
import LazyImage from '../../../common/LazyImage'
import InfoIcon from '../../../icons/InfoIcon'

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="w-full rounded-2xl bg-gray-700 select-none flex flex-col">
      <div className="relative w-full h-40 flex">
        <div className="absolute w-full h-full flex flex-col rounded-2xl">
          <img
            src={character.image}
            alt="CharacterName"
            className="rounded-2xl object-cover shadow-lg w-full h-full"
          />
          <div className="absolute w-full h-full flex flex-col">
            <div className="flex flex-row p-4">
              <div className="ml-auto">
                <AppLink href={`/char/${character.id}`}>
                  <div className="w-6 h-6 bg-gray-500 rounded-full self-center flex items-center justify-center text-lg cursor-pointer hover:bg-white hover:shadow-lg hover:text-gray-900">
                    <InfoIcon />
                  </div>
                </AppLink>
              </div>
            </div>
            <div
              className="flex flex-row p-4 mt-auto rounded-b-2xl"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,.8))'
              }}
            >
              <h3 className="text-sm font-bold">{character.name}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col p-4 flex-1">
          <h3 className="text-xs">{character.episode.length} episódios</h3>
        </div>
      </div>
    </div>
  )
}

export default memo(CharacterCard)

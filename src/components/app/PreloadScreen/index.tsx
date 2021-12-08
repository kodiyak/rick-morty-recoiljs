import React, { useEffect, useState } from 'react'
import RickMortyRepository from '../../../services/repositories/RickMortyRepository'
import { getAllCharacters } from '../../../services/rxjs/getAllCharacters'
import { useCharacters } from '../../../store/characters'

const PreloadScreen: React.FC = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const [, setCharacters] = useCharacters()

  async function load() {
    const observer = getAllCharacters()
    observer.subscribe((characters) => {
      setCharacters((oldCharacters) => [...oldCharacters, ...characters])
    })

    // RickMortyRepository.getCharacters().then((res) => {
    //   const { results } = res
    //   if (results !== undefined) {
    //     setCharacters(() => results)
    //   }
    // })
  }

  useEffect(() => {
    setLoading(() => true)
    load().finally(() => {
      setLoading(() => false)
    })
  }, [])

  return <div className="w-full h-screen bg-gray-900">{!isLoading && children}</div>
}

export default PreloadScreen

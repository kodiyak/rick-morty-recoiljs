import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import RickMortyRepository from '../../../services/repositories/RickMortyRepository'
import { getAllCharacters } from '../../../services/rxjs/getAllCharacters'
import { useCharacters } from '../../../store/characters'

interface PreloadScreenProps {
  routeKey: string
}

const PreloadScreen: React.FC<PreloadScreenProps> = ({ children, routeKey }) => {
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

  return (
    <div className="w-full h-screen bg-gray-900">
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        key={routeKey}
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }
        }}
      >
        {!isLoading && children}
      </motion.div>
    </div>
  )
}

export default PreloadScreen

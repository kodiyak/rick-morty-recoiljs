import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AppLink from '../../../components/common/AppLink'
import DefaultPage from '../../../components/common/DefaultPage'
import PageTitle from '../../../components/common/PageTitle'
import CaretLeft from '../../../components/icons/CaretLeft'
import CaretRight from '../../../components/icons/CaretRight'
import CharactersGridList from '../../../components/modules/Characters/CharactersGridList'
import DefaultHead from '../../../components/seo/DefaultHead'
import { usePagination } from '../../../hooks/usePagination'
import { useCharacters } from '../../../store/characters'

const CharactersListPage: React.FC = () => {
  const router = useRouter()
  const [characters] = useCharacters()
  const [page, setPage] = useState(1)
  const pagination = usePagination({ page, data: characters, limit: 24 })

  useEffect(() => {
    if (router.isReady) {
      const { page } = router.query
      setPage(() => Number(page))
    }
  }, [router])

  return (
    <div>
      <DefaultHead />
      <DefaultPage>
        <PageTitle title="Rick and Morty" description={'See All Characters'} />
        <div className="w-full flex flex-row items-center">
          <AppLink href={`/characters/${page - 1}`}>
            <div className="w-10 h-full text-2xl py-8 cursor-pointer">
              <CaretLeft />
            </div>
          </AppLink>
          <section className="flex-1 relative z-10 p-2">
            <motion.div
              initial="initial"
              animate="animate"
              key={`${router.route}-${page}`}
              variants={{
                initial: {
                  opacity: 0,
                  y: -10
                },
                animate: {
                  opacity: 1,
                  y: 0
                }
              }}
            >
              <CharactersGridList characters={pagination.collection} />
            </motion.div>
          </section>
          {!pagination.isLastPage && (
            <AppLink href={`/characters/${page + 1}`}>
              <div className="w-10 h-full text-2xl py-8 cursor-pointer">
                <CaretRight />
              </div>
            </AppLink>
          )}
        </div>
      </DefaultPage>

      <footer></footer>
    </div>
  )
}

export default CharactersListPage

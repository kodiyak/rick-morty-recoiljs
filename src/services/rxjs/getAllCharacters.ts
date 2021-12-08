import { Character } from 'rickmortyapi/dist/interfaces'
import { Observable } from 'rxjs'
import RickMortyRepository from '../repositories/RickMortyRepository'

export function getAllCharacters() {
  return new Observable<Character[]>((subscriber) => {
    const getCharactersByPage = (page: number) => {
      return RickMortyRepository.getCharacters({ page }).then(
        (res) => res.results || []
      )
    }

    RickMortyRepository.getCharacters()
      .then(async (res) => {
        const { info } = res
        if (info) {
          const { pages } = info
          for (let page = 1; page <= pages; page++) {
            const characters = await getCharactersByPage(page)
            subscriber.next(characters)
          }
        }
      })
      .finally(() => {
        subscriber.complete()
      })
  })
}

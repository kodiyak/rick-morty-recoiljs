import { getCharacters } from 'rickmortyapi'
import { CharacterFilter } from 'rickmortyapi/dist/interfaces'

class RickMortyRepository {
  constructor() {}

  public async getCharacters(filter?: CharacterFilter) {
    return getCharacters(filter).then((res) => res.data)
  }
}

export default new RickMortyRepository()

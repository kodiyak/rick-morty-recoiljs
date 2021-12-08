import RickMortyRepository from '../repositories/RickMortyRepository'
import { Character } from 'rickmortyapi/dist/interfaces'

export class MiddlewareUx {
  public async handle(): Promise<MiddlewareUx.Response> {
    return {
      atoms: {
        characters: await this.getCharacters()
      }
    }
  }

  private async getCharacters() {
    const { results: characters } = await RickMortyRepository.getCharacters()
    return characters || []
  }
}

export namespace MiddlewareUx {
  export type Response = {
    atoms: {
      characters: Character[]
    }
  }
}

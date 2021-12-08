import { atom, useRecoilState } from 'recoil'
import { Character } from 'rickmortyapi/dist/interfaces'

export const characters = atom<Character[]>({
  key: 'characters',
  default: []
})

export function useCharacters() {
  return useRecoilState(characters)
}

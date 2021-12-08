import { GetStaticProps } from 'next'
import { Character } from 'rickmortyapi/dist/interfaces'

export interface MiddlewareData {
  characters: Character[]
}

export type GetMiddlewareStaticProps<T extends Record<string, any>> = GetStaticProps<
  T & MiddlewareData
>

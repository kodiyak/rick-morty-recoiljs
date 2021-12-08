import { Collection } from 'collect.js'
import { useEffect, useMemo, useState } from 'react'

interface usePaginationProps<T> {
  page: number
  limit: number
  data: T
}

export function usePagination<T extends Array<any>>({
  page: pageParent,
  limit,
  data
}: usePaginationProps<T>) {
  const [page, setPage] = useState(pageParent)

  useEffect(() => {
    setPage(() => pageParent)
  }, [pageParent])

  const totalPages = useMemo(() => {
    return data.length / limit
  }, [limit, pageParent])

  const lastPage = useMemo(() => {
    return totalPages
  }, [totalPages])

  const firstPage = 1

  const isLastPage = lastPage === page
  const isFirstPage = firstPage === page

  const pagesArray = useMemo(() => {
    return Array.from({ length: totalPages }, (v, k) => k + 1)
  }, [totalPages])

  const collection = useMemo(() => {
    return new Collection(data).forPage(page, limit).all() as T
  }, [data, page])

  return {
    page,
    lastPage,
    firstPage,
    isLastPage,
    isFirstPage,
    pagesArray,
    collection
  }
}

import { useState, useEffect, useContext } from 'react'
import { getGifs } from '../service/getGifs'
import { GifsContext } from '../context/GifsContext'

const INITIAL_PAGE = 0
export function useGifs ({ keyword }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [setGifs, keyword])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)
    getGifs({ keyword, page }).then((gifs) => {
      setGifs((previous) => previous.concat(gifs))
      setLoadingNextPage(false)
    })
  }, [setGifs, keyword, page])

  return { loading, gifs, setPage, loadingNextPage }
}

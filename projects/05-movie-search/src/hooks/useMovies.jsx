import { useRef, useState, useMemo } from 'react'
import { getMovies } from '../services/getMovies'

export function useMovies ({ sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const lastSearch = useRef('')

  const searchMovies = async ({ search }) => {
    if (search === lastSearch.current) return

    setLoading(true)

    lastSearch.current = search
    const movies = await getMovies({ search })
    setMovies(movies)

    setLoading(false)
  }

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => b.year - a.year)
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, searchMovies, loading }
}

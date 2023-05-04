import { MOVIES_API_URL, MOVIES_API_KEY } from '../constants'

export async function getMovies ({ search }) {
  if (!search) return []

  try {
    const queryParams = new URLSearchParams({
      apikey: MOVIES_API_KEY,
      s: search,
    })
    const response = await fetch(`${MOVIES_API_URL}?${queryParams}`)
    const result = await response.json()

    const hasMovies = result.Response === 'True'
    let movies = []
    if (hasMovies) {
      movies = result.Search.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      }))
    }

    return movies
  } catch (error) {
    throw new Error('Error while getting movies from API')
  }
}

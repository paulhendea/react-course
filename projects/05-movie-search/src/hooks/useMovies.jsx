import movieResponseOk from '../mocks/movie-response-ok.json'
import movieResponseKo from '../mocks/movie-response-ko.json'

export function useMovies () {
  const { Search, Response } = movieResponseOk
  const movies = Search?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))
  const hasMovies = Response === 'True'

  return { movies, hasMovies }
}

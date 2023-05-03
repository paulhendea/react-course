export function ListOfMovies ({ movies, hasMovies }) {
  if (!hasMovies) return <p>No movies found :(</p>

  return (
    <ul className="movies">
      {
        movies.map((movie) => (
            <li key={movie.id} className="movie">
              <img src={movie.poster} alt={movie.Title} />
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
            </li>
        ))
      }
    </ul>
  )
}

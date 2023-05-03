import { ListOfMovies } from './components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { movies, hasMovies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(search)
  }

  return (
    <>
      <header>
        <h1>Movie app</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='query'
            value={search}
            onChange={handleChange}
            placeholder='Avengers, Star Wars...'
            style={{
              backgroundColor: error ? 'rgb(255, 0, 0, .25)' : 'transparent'
            }}
          />
          <button type='submit'>Search</button>
        </form>
        {error
          ? <p className='error'>{error}</p>
          : null}
      </header>
      <main>
        <ListOfMovies movies={movies} hasMovies={hasMovies} />
      </main>
    </>
  )
}

export default App

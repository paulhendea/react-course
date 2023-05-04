import { useCallback, useState } from 'react'
import { ListOfMovies } from './components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, searchMovies, loading } = useMovies({ sort })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchMovies = useCallback(
    debounce(({ search }) => {
      searchMovies({ search })
    }, 300)
    , []
  )

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedSearchMovies({ search: newSearch })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
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
              backgroundColor: error ? 'rgb(255, 0, 0, .25)' : 'transparent',
            }}
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
        </form>
        {error ? <p className='error'>{error}</p> : null}
      </header>
      <main>
        {loading ? <p>Loading...</p> : <ListOfMovies movies={movies} />}
      </main>
    </>
  )
}

export default App

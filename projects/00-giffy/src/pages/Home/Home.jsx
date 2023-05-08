import './Home.css'
import { useLocation } from 'wouter'
import { useState } from 'react'
import { useGifs } from '../../hooks/useGifs'
import { Loading } from '../../components/Loading/Loading'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
import { LazyTrending } from '../../components/TrendingSearches/TrendingSearches'

export function Home () {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()

  const { loading, gifs } = useGifs({ keyword: 'random' })

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <div className="Home">
      <section className='search'>
        <h1 className='section-title'>Search</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={keyword}
            onChange={handleChange}
            placeholder="Search gifs"
          />
        </form>
      </section>
      <section className='random-gifs'>
        <h1 className="section-title">Random GIFS</h1>
        {loading ? <Loading /> : <ListOfGifs gifs={gifs} />}
      </section>
      <section className='popular-categories'>
        <h1 className='section-title'>Popular GIFS</h1>
        <LazyTrending />
      </section>
    </div>
  )
}

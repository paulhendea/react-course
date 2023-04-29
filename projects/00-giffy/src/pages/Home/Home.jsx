import { Link, useLocation } from 'wouter'
import { useState } from 'react'
import './Home.css'
import { useGifs } from '../../hooks/useGifs'
import { Loading } from '../../components/Loading/Loading'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'

const POPULAR_GIFS = ['Anime', 'Avengers', 'Cats', 'Minions']

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
      <form className="Search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search gifs"
        />
      </form>
      <section>
        <h1 className="Home-title">Random GIFS</h1>
        {loading ? <Loading /> : <ListOfGifs gifs={gifs} />}
      </section>
      <section>
        <h1 className="Home-title">Popular GIFS</h1>
        <ul className="Home-list">
          {POPULAR_GIFS.map((category) => {
            return (
              <li key={category}>
                <Link to={`/search/${category}`}>{category} gifs</Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

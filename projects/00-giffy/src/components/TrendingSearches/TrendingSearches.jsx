import './TrendingSearches.css'
import { useEffect, useState } from 'react'
import { getTrendingTerms } from '../../service/getTrendingTerms'
import { Link } from 'wouter'

export function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then((trendingTerms) => setTrends(trendingTerms))
  }, [])

  return (
    <ul className='popular-categories-list'>
      {trends?.map((category) => {
        return (
          <li key={category}>
            <Link to={`/search/${category}`}>{category[0].toUpperCase() + category.slice(1)}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export function LazyTrending () {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onChange = (entries) => {
      const element = entries[0]
      if (element.isIntersecting) setShow(true)
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    observer.observe(document.getElementById('LazyTrending'))
  }, [])

  return (
    <div id='LazyTrending'>
      {show ? <TrendingSearches /> : null}
    </div>
  )
}

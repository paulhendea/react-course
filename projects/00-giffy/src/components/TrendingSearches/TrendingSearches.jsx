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

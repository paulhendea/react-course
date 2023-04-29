import { useEffect, useState } from 'react'
import { getTrendingTerms } from '../../service/getTrendingTerms'

export function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then(setTrends)
  }, [])

  console.log(trends)
  // TODO
}

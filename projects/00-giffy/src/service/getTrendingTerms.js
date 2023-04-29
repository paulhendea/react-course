import { API_KEY } from './settings'

export function getTrendingTerms ({ keyword = 'minion' } = {}) {
  const API_URL = `api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

  return fetch(API_URL)
    .then((response) => response.json())
    .then((result) => result.data)
}

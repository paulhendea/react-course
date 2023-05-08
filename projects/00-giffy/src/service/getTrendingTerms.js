import { API_BASE_URL, API_KEY } from '../constants'

export function getTrendingTerms ({ keyword = 'minion' } = {}) {
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
  })
  const API_URL = `${API_BASE_URL}/v1/trending/searches?${queryParams}`

  return fetch(API_URL)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => {
      console.log(error)
      return null
    })
}

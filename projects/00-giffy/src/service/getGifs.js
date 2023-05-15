import { API_BASE_URL, API_KEY } from '../constants'

export async function getGifs ({ keyword = 'minion', limit = 25, page = 0 } = {}) {
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
    q: keyword,
    limit,
    offset: page * limit + 1,
    rating: 'g',
    lang: 'en',
  })
  const API_URL = `${API_BASE_URL}/v1/gifs/search?${queryParams}`

  return fetch(API_URL)
    .then((response) => response.json())
    .then((result) => result.data.map((gif) => {
      const { id, title, images } = gif
      const { url } = images.downsized_medium
      return { id, title, url }
    }))
    .catch((error) => {
      console.log(error)
      return null
    })
}

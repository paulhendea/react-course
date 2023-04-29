import { API_KEY } from './settings'

export function getGifs ({ keyword = 'minion' } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20&offset=0&rating=g&lang=en`

  return fetch(API_URL)
    .then((response) => response.json())
    .then((result) =>
      result.data.map((gif) => {
        const { id, title, images } = gif
        const { url } = images.downsized_medium
        return { id, title, url }
      })
    )
}

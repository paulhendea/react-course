import { CAT_IMAGE_ENDPOINT_URL } from '../constants'

export async function getCatImage (text) {
  try {
    const response = await fetch(CAT_IMAGE_ENDPOINT_URL.replace('{text}', text))
    const result = await response.json()
    const { url } = result
    return url
  } catch {
    return null
  }
}

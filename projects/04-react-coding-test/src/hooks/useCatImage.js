import { useState, useEffect } from 'react'
import { getCatImage } from '../services/images'
import { CAT_IMAGE_BASE_URL } from '../constants'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWords = fact.split(' ', 3).join(' ')
    getCatImage(firstWords).then((newImageUrl) => setImageUrl(newImageUrl))
  }, [fact])

  return { imageUrl: CAT_IMAGE_BASE_URL + imageUrl }
}

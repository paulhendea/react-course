import { useState, useEffect, useContext } from 'react'
import { getGifs } from '../service/getGifs'
import { GifsContext } from '../context/GifsContext'

export function useGifs({ keyword }) {
  const {gifs, setGifs} = useContext(GifsContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  return { loading, gifs }
}

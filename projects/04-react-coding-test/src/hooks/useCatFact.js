import { useState, useEffect } from 'react'
import { getCatFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshCatFact = () => {
    getCatFact().then((newFact) => setFact(newFact))
  }

  useEffect(refreshCatFact, [])

  return { fact, refreshCatFact }
}

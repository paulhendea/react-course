import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isInputUsed = useRef(false)

  function updateSearch (text) {
    setSearch(text)
  }

  useEffect(() => {
    if (!isInputUsed.current) {
      isInputUsed.current = search !== ''
      return
    }

    if (search === '') {
      setError('Cannot search for nothing')
      return
    }

    if (search === 'hello') {
      setError('world!')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

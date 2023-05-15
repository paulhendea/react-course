import { useState, useEffect, useRef } from 'react'

export function useNearScreen ({ distance = '100px' } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const [element] = entries
      if (element.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    observer.observe(fromRef.current)

    return () => observer.disconnect()
  }, [distance])

  return { isNearScreen, fromRef }
}

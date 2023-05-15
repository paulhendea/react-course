import { Suspense, lazy } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'

const TrendingSearches = lazy(() =>
  import('./TrendingSearches.jsx')
    .then((module) => ({ default: module.TrendingSearches }))
)

export function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <div ref={fromRef}>
        <Suspense fallback={null}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
  )
}

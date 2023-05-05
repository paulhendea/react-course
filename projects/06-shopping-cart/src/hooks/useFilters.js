import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

export function useFilters () {
  const filtersContext = useContext(FiltersContext)

  if (filtersContext === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  const { filters, setFilters } = filtersContext

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filters, filterProducts, setFilters }
}

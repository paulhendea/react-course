import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const contextInitialValue = {
    filters,
    setFilters
  }
  return (
    <FiltersContext.Provider value={contextInitialValue}>
      {children}
    </FiltersContext.Provider>
  )
}

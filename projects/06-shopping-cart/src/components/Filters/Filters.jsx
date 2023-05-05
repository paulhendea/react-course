import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const priceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value
    setFilters((previous) => ({
      ...previous,
      minPrice: newMinPrice,
    }))
  }

  const handleChangeCategory = (event) => {
    const newCategory = event.target.value
    setFilters((previous) => ({
      ...previous,
      category: newCategory,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          name='category'
          id={categoryFilterId}
          value={filters.category}
          onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>

      <div>
        <label htmlFor={priceFilterId}>Price</label>
        <input
          type='range'
          id={priceFilterId}
          min='0'
          max='1000'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
    </section>
  )
}

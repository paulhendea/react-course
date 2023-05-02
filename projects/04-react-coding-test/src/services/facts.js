import { CAT_FACT_ENDPOINT_URL } from '../constants/index'

export async function getCatFact () {
  try {
    const response = await fetch(CAT_FACT_ENDPOINT_URL)
    const result = await response.json()
    const { fact } = result
    return fact
  } catch {
    return 'No cat fact :('
  }
}

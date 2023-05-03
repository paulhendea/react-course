import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshCatFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = (event) => {
    refreshCatFact()
  }

  return (
    <main>
      <h1>Kitty app</h1>
      {fact ? <p>{fact}</p> : null}
      {imageUrl
        ? (
          <img
            className='kitty-image'
            src={imageUrl}
            alt='Random cat image using the first words of the fact'
          />
          )
        : null}
      <div><button onClick={handleClick}>New fact</button></div>
    </main>
  )
}

import { useContext } from 'react'
import { GifsContext } from '../../context/GifsContext'
import { Gif } from '../../components/Gif/Gif'

export function Detail ({ id }) {
  const { gifs } = useContext(GifsContext)

  const gif = gifs.find((singleGif) => singleGif.id === id)
  return (
    <div className="Detail">
      <h1 className="Search-title">{gif.title}</h1>
      <Gif {...gif} />
    </div>
  )
}

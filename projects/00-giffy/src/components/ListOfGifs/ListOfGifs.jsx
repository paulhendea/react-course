import { Gif } from '../Gif/Gif'
import './ListOfGifs.css'

export function ListOfGifs ({ gifs }) {
  return (
    <div className="GifList">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  )
}

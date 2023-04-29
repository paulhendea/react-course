import { Link } from 'wouter'
import './Gif.css'

export function Gif ({ id, title, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4 className="Gif-title">{title}</h4>
        <img src={url} alt="gif" />
      </Link>
    </div>
  )
}

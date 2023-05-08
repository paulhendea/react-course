import { Loading } from '../../components/Loading/Loading'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import './Search.css'

export function Search ({ keyword }) {
  const { loading, gifs } = useGifs({ keyword })

  return (
    <div className="Search">
      <h1 className="Search-title">{decodeURI(keyword)}</h1>
      {loading
        ? <Loading />
        : <ListOfGifs gifs={gifs} />}
    </div>
  )
}

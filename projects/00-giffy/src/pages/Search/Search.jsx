import { Loading } from '../../components/Loading/Loading'
import { ListOfGifs } from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import './Search.css'

export function Search ({ keyword }) {
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage((previous) => previous + 1)

  return (
    <div className="Search">
      <h1 className="Search-title">{decodeURI(keyword)}</h1>
      {loading
        ? <Loading />
        : <ListOfGifs gifs={gifs} />}
      <button onClick={handleNextPage}>Next page</button>
    </div>
  )
}

import { Link, Route } from 'wouter'
import { Home } from './pages/Home/Home'
import { Search } from './pages/Search/Search'
import { Detail } from './pages/Detail/Detail'
import { GifsContextProvider } from './context/GifsContext'

export function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="App-logo" src="/giffy-logo.svg" alt="Giffy logo" />
      </Link>
      <GifsContextProvider>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/search/:keyword">
          {(params) => <Search keyword={params.keyword} />}
        </Route>
        <Route path="/gif/:id">{(params) => <Detail id={params.id} />}</Route>
      </GifsContextProvider>
    </div>
  )
}

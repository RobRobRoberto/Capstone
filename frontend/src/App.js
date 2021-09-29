import Welcome from './pages/Welcome'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getToken } from './services/api-service'
import Start from './pages/Start'
import ProtectedRouter from './auth/ProtectedRouter'
import NewYorkTimesBestList from './pages/NewYorkTimesBestList'
import Navbar from './components/Navbar'
import Watchlist from './pages/Watchlist'

export default function App() {
  //Damit die unteren Layer auch den Token nutzen können, bauen wir ihn hier hin.
  const [token, setToken] = useState()
  //Funktion zum hinuntergeben :
  const login = credentials => {
    getToken(credentials).then(setToken)
  }

  const logout = () => setToken()

  useEffect(() => {
    console.log('Token changed to', token)
  }, [token])

  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Welcome onLogin={login} token={token} />
      </Route>
      {/*<Route path="/spiegel" component={Spiegel} />*/}
      <Route path="/new-york-times" component={NewYorkTimesBestList} />
      <Route path="/watchlist" component={Watchlist} />
      <ProtectedRouter path="/start" token={token}>
        <Start onLogout={logout} />
      </ProtectedRouter>
    </Router>
  )
}

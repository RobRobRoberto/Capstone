import Welcome from './pages/Welcome'
import Register from './pages/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getToken } from './services/api-service'
import Start from './pages/Start'
import ProtectedRouter from './auth/ProtectedRouter'
import Library from './pages/Library'
import NewYorkTimesBestList from './pages/NewYorkTimesBestList'

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
      <Route exact path="/">
        <Welcome onLogin={login} token={token} />
      </Route>
      <Route path="/library" component={Library} />
      <Route path="/register" component={Register} />
      <ProtectedRouter path="/start" token={token}>
        <Start onLogout={logout} />
      </ProtectedRouter>
      <Route>
        <NewYorkTimesBestList onLogout={logout} />
      </Route>
    </Router>
  )
}

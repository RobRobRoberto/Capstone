import Welcome from './pages/Welcome'
import Register from './pages/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import { getToken } from './services/api-service'
import Start from './pages/Start'

export default function App() {
  //Damit die unteren Layer auch den Token nutzen können, bauen wir ihn hier hin.
  const [token, setToken] = useState()
  //Funktion zum hinuntergeben :
  const login = credentials => {
    getToken(credentials).then(setToken)
  }

  useEffect(() => {
    console.log('Token changed to', token)
  }, [token])

  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/">
          <Welcome onLogin={login} token={token} />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/start" component={Start} />
      </div>
    </Router>
  )
}

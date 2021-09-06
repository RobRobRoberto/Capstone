import Nav from './components/Nav'
import Welcome from './pages/Welcome'
import LogIn from './pages/LogIn'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <h1>Bücherclub</h1>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={LogIn} />
      </div>
    </Router>
  )
}

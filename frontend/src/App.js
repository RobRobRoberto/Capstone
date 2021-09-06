import Nav from './components/Nav'
import Welcome from './pages/Welcome'
import LogIn from './pages/LogIn'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={LogIn} />
        <Nav />
      </div>
    </Router>
  )
}

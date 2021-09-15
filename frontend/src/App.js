import Welcome from './pages/Welcome'
import Register from './pages/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Welcome} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  )
}

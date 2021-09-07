import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <ul>
      <Link to="/login">
        <li>Login</li>
      </Link>
      <Link to="/">
        <li>Home</li>
      </Link>
    </ul>
  )
}

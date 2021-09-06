import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <ul>
      <Link to="/">
        <li>Welcome</li>
      </Link>
      <Link to="/login">
        <li>Login</li>
      </Link>
    </ul>
  )
}

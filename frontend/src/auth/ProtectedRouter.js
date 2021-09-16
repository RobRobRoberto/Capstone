import { Redirect } from 'react-router-dom'
//...props bedeutet: und iwleche anderen props
export default function ProtectedRouter({ token }) {
  if (!token) {
    return <Redirect to="/" />
  }
}

import { Redirect, Route } from 'react-router-dom'
//...props bedeutet: und iwleche anderen props
export default function ProtectedRouter({ token, ...props }) {
  if (!token) {
    return <Redirect to="/" />
  }
  //WTF?
  return <Route {...props} />
}

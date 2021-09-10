import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <Wrapper>
      <h2>Herzlich Willkommen zurück 😀</h2>
      <h3>Bitte melden Sie sich mit Ihren Nutzerdaten an.</h3>
      <p>Username</p>
      <input />
      <p>Passwort</p>
      <input />
      <button>Anmelden</button>
      <footer>
        <Link to="/register">Registrieren</Link>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.form`
  text-align: center;
`

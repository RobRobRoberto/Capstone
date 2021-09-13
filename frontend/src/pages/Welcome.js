import styled from 'styled-components/macro'

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
    </Wrapper>
  )
}
const Wrapper = styled.form`
  text-align: center;
`

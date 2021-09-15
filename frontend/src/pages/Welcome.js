import styled from 'styled-components/macro'
import { useState } from 'react'

//Funktion abholen
export default function Welcome(onLogin) {
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()

  //Submit event
  function handleSubmit(event) {
    event.preventDefault()
    onLogin(credentials)
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }
  const credentials = { username: username, password: password }
  //Evtl. noch die Attribute title und name hinzufügen?!
  return (
    <Wrapper>
      <h2>Herzlich Willkommen zurück 😀</h2>
      <h3>Bitte melden Sie sich mit Ihren Nutzerdaten an.</h3>
      <p>Username</p>
      <input onChange={handleUsernameChange} value={username} />
      <p>Passwort</p>
      <input onChange={handlePasswordChange} value={password} />
      <button onSubmit={handleSubmit}>Anmelden</button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  text-align: center;
`

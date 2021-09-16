import styled from 'styled-components/macro'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const credentials = {
  username: 'Frank',
  password: 'test',
}
//token und login funktion werden heruntergegebn.
export default function Welcome({ token, onLogin }) {
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

  if (token) {
    return <Redirect to="/start" />
  }

  //Evtl. noch die Attribute title und name hinzufügen?!
  return (
    <Wrapper onSubmit={handleSubmit}>
      <h2>Herzlich Willkommen zurück 😀</h2>
      <h3>Bitte melden Sie sich mit Ihren Nutzerdaten an.</h3>
      <p>Username</p>
      <input onChange={handleUsernameChange} value={username} />
      <p>Passwort</p>
      <input onChange={handlePasswordChange} value={password} />
      <button>Anmelden</button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  text-align: center;
`

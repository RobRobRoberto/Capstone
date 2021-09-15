import styled from 'styled-components/macro'
import axios from 'axios'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function Welcome() {
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()
  const { user } = useAuth()

  function handleSubmit(event) {
    event.preventDefault()

    axios.post(
      'http://localhost:8080/auth/login',
      {
        username: 'Frank',
        password: 'test',
      }
        .then(response => response.data) //Entpacken der Antwort.
        // Evtl weiteres entpacken hier notwendig.
        .then(dto => dto.token)
        .catch(error => console.log(error))
    )
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  if (user) {
    return <Redirect to="/main_menu" />
  }

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

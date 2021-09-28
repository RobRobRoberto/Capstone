import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Main from '../components/Main'
import Page from '../components/Page'
import Input from '../components/Input'
import styled from 'styled-components/macro'

//token und login funktion werden heruntergegeben.
export default function Welcome({ token, onLogin }) {
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()

  const credentials = {
    username: username,
    password: password,
  }

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
  // Type Passwort macht die zeichen zu Sternen.
  return (
    <Page>
      <Main as="form" onSubmit={handleSubmit}>
        <p>Melde Dich mit Deinen Nutzerdaten an</p>

        <Input
          className="main-input "
          placeholder="Username"
          onChange={handleUsernameChange}
        />
        <Input
          type="password"
          className="main-input "
          placeholder="Passwort"
          onChange={handlePasswordChange}
        />
        <Button>Anmelden</Button>
      </Main>
    </Page>
  )
}

const Button = styled.button`
  padding: var(--size-m);
  background: var(--accent);
  border: 1px solid var(--accent);
  color: var(--neutral-light);
  font-size: 1em;
  border-radius: var(--size-s);
`

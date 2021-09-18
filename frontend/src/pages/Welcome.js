import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import TextField from '../components/TextField'
import Page from '../components/Page'
import Main from '../components/Main'

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
        <Header title="The Best Books" />
        <h3>Bitte melde dich mit deinem Nutzerdaten an.</h3>
        <p>Username</p>
        <TextField onChange={handleUsernameChange} value={username || ''} />
        <p>Passwort</p>
        <TextField
          onChange={handlePasswordChange}
          value={password || ''}
          type="password"
        />
        <Button>Anmelden</Button>
      </Main>
    </Page>
  )
}

import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../components/Main.css'
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
    <form className="main-container" onSubmit={handleSubmit}>
      <section className="main-subscription">
        <p className="main-heading">Melde Dich mit Deinen Nutzerdaten an</p>

        <input
          className="main-input "
          placeholder="Username"
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          className="main-input "
          placeholder="Passwort"
          onChange={handlePasswordChange}
        />
        <button>Anmelden</button>
      </section>
    </form>
  )
}

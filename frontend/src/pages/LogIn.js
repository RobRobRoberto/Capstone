import styled from 'styled-components/macro'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// const init = {
//   password: '',
//   username: '',
// }

export default function LogIn() {
  // const [credentials, setCredentials] = new useState(init)
  const [username, setUsername] = new useState()
  const [password, setPassword] = new useState()
  // const handleCredentialsChange = event =>
  //   setCredentials({ ...credentials, [event.target.name]: event.target.value })
  // console.log(credentials)

  const handleUsernameChange = event => {
    const newUsername = event.target.value
    setUsername(newUsername)
  }

  const handlePasswordChange = event => {
    const newPassword = event.target.value
    setPassword(newPassword)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios
      .post('http://localhost:8080/user', {
        password: password,
        username: username,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h2>Bitte geb Deine Userdaten ein</h2>
      <p>Username</p>
      <input onChange={handleUsernameChange} name="username" value={username} />
      <p>Passwort</p>
      <input onChange={handlePasswordChange} name="password" value={password} />
      <button>registrieren</button>
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  text-align: center;
`

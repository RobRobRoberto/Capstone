import styled from 'styled-components/macro'
import { useState } from 'react'

const init = {
  username: '',
  password: '',
}

export default function LogIn() {
  const [credentials, setCredentials] = new useState(init)

  const handleCredentialsChange = event =>
    setCredentials({ ...credentials, [event.target.name]: event.target.value })

  // Innerhalb des input Tags ist das Attribut "value" dafür da den 'initial value' festzulegen.
  // Das heißt er ist in meinem Bsp. leer.
  return (
    <Wrapper>
      <h2>Bitte logge Dich ein</h2>

      <input
        onChange={handleCredentialsChange}
        name="username"
        value={credentials.username}
      />
      <input
        onChange={handleCredentialsChange}
        name="password"
        value={credentials.password}
      />
      <button>anmelden</button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
`

import styled from 'styled-components/macro'
import { useState } from 'react'

const initialState = {
  username: '',
  password: '',
}

export default function LogIn() {
  const [credentials, setCredentials] = new useState(initialState)

  function handleChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })

    console.log(credentials)
  }

  // Innerhalb des input Tags ist das Attribut "value" dafür da den 'initial value' festzulegen.
  // Das heißt er ist in meinem Bsp. leer.
  return (
    <Wrapper>
      <h2>Bitte logge Dich ein</h2>

      <input onChange={handleChange} value={credentials.username} />
      <input onChange={handleChange} value={credentials.password} />
      <button>anmelden</button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
`

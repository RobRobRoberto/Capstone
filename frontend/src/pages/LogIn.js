import styled from 'styled-components/macro'

export default function LogIn() {
  return (
    <Wrapper>
      <h2>Bitte logge Dich ein</h2>

      <input type="text" name="username" />
      <input type="text" name="password" />
      <button>anmelden</button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
`

import styled from 'styled-components/macro'

export default function LogIn() {
  return (
    <Wrapper>
      <h2>Bitte logge Dich ein</h2>
      <input type="text" />
      <input type="text" />
      <button>anmelden</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
`

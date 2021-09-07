import styled from 'styled-components/macro'

export default function Welcome() {
  return (
    <Wrapper>
      <h2>Herzlich Willkommen zurück 😀</h2>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
`

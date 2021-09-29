import styled from 'styled-components/macro'

import Cards from '../components/Cards'

export default function Start() {
  return (
    <Container>
      <Cards />
    </Container>
  )
}

const Container = styled.div`
  background-position: center;
`

import styled from 'styled-components/macro'

import Cards from '../components/Cards'

export default function Start() {
  return (
    <Container>
      <Text>
        <h2>Best of Books</h2>
      </Text>
      <Cards />
    </Container>
  )
}

const Container = styled.div`
  background-position: center;
`

const Text = styled.div`
  text-align: center;
  margin-bottom: 0;
`

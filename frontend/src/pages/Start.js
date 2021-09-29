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
  background-image: url('https://i.pinimg.com/originals/88/93/d0/8893d0ae6c93ba0e405a64170c32fc61.jpg');
`

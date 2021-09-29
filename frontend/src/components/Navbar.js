import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navbar() {
  return (
    <Container>
      <Listitem>
        <Link to="/start">Home</Link>
      </Listitem>
      <Listitem>
        <Link to="/watchlist">Watchlist</Link>
      </Listitem>
    </Container>
  )
}

const Container = styled.ul`
  height: 80px;
  background-color: black;
  text-align: center;
  border-radius: 0 0 12px 12px;
  padding: 0;
  margin: 0;
  display: flex;
`
const Listitem = styled.li`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
`

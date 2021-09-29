import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navbar() {
  return (
    <Container>
      <Listitem>
        <Link to="/start" style={{ color: 'white' }}>
          Home
        </Link>
      </Listitem>
      <Listitem>
        <Link to="/watchlist" style={{ color: 'white' }}>
          Watchlist
        </Link>
      </Listitem>
      <Listitem>
        <Link style={{ color: 'white' }}>Logout</Link>
      </Listitem>
    </Container>
  )
}

const Container = styled.ul`
  height: 80px;
  background-color: black;
  text-align: center;
  padding: 0;
  margin: 0;
  display: flex;
`
const Listitem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  text-decoration: none;
`

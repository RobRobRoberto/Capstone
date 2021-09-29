import React from 'react'
import styled from 'styled-components/macro'
import { addToWatchlist } from '../services/api-service'

export default function BestListItem(props) {
  const book = {
    id: 11,
    author: props.author,
    book: props.title,
    rank: props.rank,
  }
  function handleClick() {
    addToWatchlist(book).catch(error => console.log(error))
  }

  return (
    <Wrapper>
      <li>
        <h4> {props.rank}</h4>
        <p>{props.title}</p>
        <h5 style={{ marginTop: 0 }}>{props.author}</h5>
        <button onClick={handleClick}>Add to reading list</button>
      </li>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  align-content: center;
  margin: 0;
  padding: 2px;
  text-align: left;
`

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
      <p> {props.rank}</p>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <button onClick={handleClick}>Add to reading list</button>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  align-content: center;
  margin: 0;
  padding: 2px;
  text-align: left;
`

import styled from 'styled-components/macro'
import React from 'react'
import { deleteEntry } from '../services/api-service'

export default function WatchListItem({ id, title, author, reRender }) {
  function handleClick(event) {
    console.log(event.target.value)
    deleteEntry(event.target.value)
      .then(() => reRender())
      .catch(er => console.log(er))
  }

  return (
    <Wrapper>
      <p>Author: {author}</p>
      <p>Title: {title}</p>
      <button onClick={handleClick} value={id}>
        Remove Book
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  align-content: center;
  margin: 0;
  padding: 2px;
  text-align: left;
`

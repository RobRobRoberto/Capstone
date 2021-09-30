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
      <FirstBox>
        <h4> {props.rank}</h4>
        <p>{props.title}</p>
        <h5 style={{ marginTop: 0 }}>{props.author}</h5>
      </FirstBox>
      <FirstBox>
        <BookCover
          src={`http://covers.openlibrary.org/b/isbn/${props.isbn}-L.jpg`}
          alt="Cover of a Book"
        />
        <button onClick={handleClick}>Add to reading list</button>
      </FirstBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-content: center;
  margin: 0;
  padding: 2px;
  text-align: left;
  place-items: center;
  display: flex;
  justify-content: space-between;
`
const FirstBox = styled.div`
  display: grid;
`
const BookCover = styled.img`
  width: 100px;
`

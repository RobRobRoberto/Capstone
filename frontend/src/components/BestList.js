import React from 'react'
import styled from 'styled-components/macro'

export default function BestList(props) {
  return (
    <Wrapper>
      <p> {props.rank}</p>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  align-content: center;
  margin: 0;
  padding: 2px;
  text-align: center;
`

import styled from 'styled-components/macro'

import React from 'react'
import { Link } from 'react-router-dom'

export default function CardItem(props) {
  return (
    <Link to={props.path}>
      <Wrapper>
        <ImageBig alt="Bilderbuch" src={props.src} />
        <h5>{props.text}</h5>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  margin: 20px;
  width: min-content;
  padding: 24px;
  text-align: center;
  border: 1px solid #333;
  border-radius: 12px;
  box-shadow: 1px 2px 8px #666;
  background-color: white;
`

const ImageBig = styled.img`
  width: 200px;
  height: auto;
`

import React from 'react'

import CardItem from './CardItem'
import styled from 'styled-components/macro'

export default function Cards() {
  return (
    <Container>
      <ul style={{ padding: '0' }}>
        <CardItem
          src="images/Die-Zeit.png"
          text="Bestenliste der Zeit"
          path="/bestenliste/die-Zeit"
        />
        <CardItem
          src="images/NYT.png"
          text="Bestenliste der New York Times"
          path="/new-york-times"
        />
        <CardItem
          src="images/Amazon.png"
          text="Bestenliste von Amazon"
          path="/bestenliste/amazon"
        />
        <CardItem
          src="images/Der-Spiegel.png"
          text="Bestenliste des Spiegels"
          path="/bestenliste/der-spiegel"
        />
      </ul>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  place-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  text-align: center;
  margin-top: 0;
`

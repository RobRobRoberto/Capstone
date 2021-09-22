import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className="cards">
      <h1>Schau Dir diese Bestenlisten an</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Die-Zeit.png"
              text="Bestenliste der Zeit"
              label="Sachbücher"
              path="/bestenliste/die-Zeit"
            />
            <CardItem
              src="images/Amazon.png"
              text="Bestenliste von Amazon"
              label="Hardcover"
              path="/bestenliste/amazon"
            />
            <CardItem
              src="images/Der-Spiegel.png"
              text="Bestenliste des Spiegels"
              label="Hardcover"
              path="/bestenliste/der-spiegel"
            />
          </ul>
        </div>
        <h1>Oder schau welche Buchpreise vergeben wurden</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/Deutscher-Buchpreis.jpg"
                text="Deutscher Buchpreis 2021"
                label="Krimi"
                path="/buchpreis/deutscher"
              />
              <CardItem
                src="images/Literaturnobelpreis.png"
                text="Literaturnobelpreis 2021"
                label="Roman"
                path="/buchpreis/literaturnobelpreis"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards

import BestList from '../components/BestList'
import { getBestlist } from '../services/api-service'
import { useEffect, useState } from 'react'

export default function NewYorkTimesBestList() {
  const [books, setBooks] = new useState([])

  useEffect(() => getBestlist().then(setBooks))

  // useEffect(() => {
  //   console.log('Folgende Bücher kamen hinzu:', books)
  // })

  return (
    <div>
      <h2>New York Times Bestlist</h2>
      {books.map(books => (
        <BestList rank={books.rank} title={books.book} author={books.author} />
      ))}
    </div>
  )
}

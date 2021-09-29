import { getBestlist } from '../services/api-service'
import BestList from '../components/BestList'
import { useEffect, useState } from 'react'

export default function Watchlist() {
  const [books, setBooks] = new useState([])

  useEffect(() => getBestlist().then(setBooks))

  return (
    <div>
      <h2>Watchlist</h2>
      {books.map(books => (
        <BestList rank={books.rank} title={books.book} author={books.author} />
      ))}
    </div>
  )
}

import BestListItem from '../components/BestListItem'
import { getBestlist } from '../services/api-service'
import { useEffect, useState } from 'react'

export default function NewYorkTimesBestList() {
  const [books, setBooks] = new useState([])

  useEffect(() => getBestlist().then(setBooks), [])

  return (
    <div>
      <h2>New York Times Bestlist</h2>
      {books.map(books => (
        <BestListItem
          rank={books.rank}
          title={books.book}
          author={books.author}
        />
      ))}
    </div>
  )
}

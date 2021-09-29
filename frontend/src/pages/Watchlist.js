import { useEffect, useState } from 'react'
import { readWatchlist } from '../services/api-service'
import WatchListItem from '../components/WatchListItem'

export default function Watchlist() {
  const [books, setBooks] = new useState([])

  useEffect(() => readWatchlist().then(setBooks), [])

  function reRender() {
    readWatchlist().then(setBooks)
  }

  return (
    <div>
      <h2>Watchlist</h2>
      {books.map(books => (
        <WatchListItem
          id={books.id}
          title={books.book}
          author={books.author}
          reRender={reRender}
        />
      ))}
    </div>
  )
}

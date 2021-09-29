import axios from 'axios'

export const getToken = credentials =>
  axios
    .post('http://localhost:3000/auth/login', credentials)
    .then(response => response.data) //auspacken
    .then(dto => dto.token)

export const getBestlist = () =>
  axios.get('http://localhost:3000/nyt').then(response => response.data)

export const addToWatchlist = book =>
  axios.post('http://localhost:3000/watchlist', book)

export const readWatchlist = () =>
  axios.get('http://localhost:3000/watchlist').then(response => response.data)

export const deleteEntry = id =>
  axios.delete('http://localhost:3000/watchlist/' + id)

import axios from 'axios'

export const getToken = credentials =>
  axios
    .post('http://localhost:3000/auth/login', credentials)
    .then(response => response.data) //auspacken
    .then(dto => dto.token)

export const getBestlist = () =>
  axios.get('http://localhost:3000/nyt').then(response => response.data)

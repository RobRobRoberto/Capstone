import axios from 'axios'

export const getToken = credentials =>
  axios
    .post('http://localhost:8080/auth/login', credentials)
    .then(response => response.data) //auspacken
    .then(dto => dto.token)

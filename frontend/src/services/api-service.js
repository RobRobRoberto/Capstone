import axios from 'axios'

export const getToken = () =>
  axios
    .post('http://localhost:8080/auth/login', {
      username: 'Frank',
      password: 'test',
    })
    .then(s => console.log(s))
    .then(response => response.data) //auspacken
    .then(dto => dto.token)

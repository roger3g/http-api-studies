const express = require('express')
const server = express()
const router = express.Router()

const data = require('./data.json')
const port = 3000

server.use(express.json({extended: true}))
server.use(router)

router.get('/users', (request, response) => {
  return response.json(data)
})

router.get('/users/:id', (request, response) => {
  const { id } = request.params
  const selectedUser = data.findIndex(user => user.id === id)

  if (!selectedUser) return response.status(204).json()
  return response.json(data[selectedUser])
})

router.post('/users', (request, response) => {
  const { name, email } = request.body
  
  const id = Math.random().toString(32).substr(2,4).toUpperCase()
  data.push({id: id, name: name, email: email})

  return response.json(data)
})

router.put('/users/:id', (request, response) => {
  const { name, email } = request.body
  const { id } = request.params
  
  const selectedUser = data.findIndex(user => user.id === id)

  const {
    id: currentId,
    name: currentName,
    email: currentEmail, 
  } = data[selectedUser]

  data[selectedUser].id = currentId
  data[selectedUser].name = name ? name : currentName
  data[selectedUser].email = email ? email : currentEmail

  if (!selectedUser) return response.status(204).json()
  return response.json(data[selectedUser])
})

router.delete('/users/:id', (request, response) => {
  const { id } = request.params
  
  const selectedUser = data.findIndex(user => user.id === id)
  data.splice(selectedUser, 1)

  if (!selectedUser) return response.status(204).json()
  return response.json(data)
})

server.listen(port, error => {
  const message = error 
  ? 'Error when running the server' 
  : `Server running on http://localhost:${port}/users`
  
  return console.log(message)
})
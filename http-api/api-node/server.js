const express = require('express')
const server = express()

const port = 8080
server.use(express.json({extended: true}))

const users = []

server.get('/users', (req, res) => { // Pedindo um usuário
  return res.send(JSON.stringify(users, null, 2))
})

server.post('/users', (req, res) => { // Criando usuário
  const { user } = req.body
  const id = Math.random().toString(32).substr(2,9).toUpperCase()

  users.push({id: id, user: user})

  return res.send(JSON.stringify(users, null, 2))
})

server.put('/users/:id', (req, res) => { // Editando usuário
  const { user } = req.body
  const { id } = req.params

  const selectedUser = users.findIndex(user => user.id === id)

  users[selectedUser].user = user

  return res.send(JSON.stringify(users, null, 2))
})

server.delete('/users/:id', (req, res) => { // Deletando usuário
  const { id } = req.params
  
  const selectedUser = users.findIndex(user => user.id === id)
  users.splice(selectedUser, 1)

  return res.send(JSON.stringify(users, null, 2))
})

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/users`)
})

// Comandos curl
// GET: curl -X GET http://localhost:8080/users
// POST: curl -d '{"user": "userName"}' -H "Content-type: application/json" -X POST http://localhost:8080/users
// PUT: curl -d '{"user": "userName"}' -H "Content-type: application/json" -X PUT http://localhost:8080/users/ID
// DELETE: curl -X DELETE http://localhost:8080/users/ID